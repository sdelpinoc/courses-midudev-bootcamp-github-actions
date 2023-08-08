# Github actions

## Upload to GitHub and Vercel
- For the action, we use the [Vercel Action](https://github.com/marketplace/actions/vercel-action)
- For the [GitHub context](https://docs.github.com/en/actions/learn-github-actions/contexts#github-context)

- Setup the vercel.json file:
  - When github.enabled set to false, Vercel for GitHub will not deploy the given project
  ~~~
    "github": {
      "enabled": false
    }
  ~~~

  - Skip vercel's build step
  - Set builds to @vercel/static to skip vercel's build step. src is the path to the directory containing the files to be deployed.
  ~~~
  "builds": [
    {
      "src": "./dist/**",
      "use": "@vercel/static"
    }
  ],
  ~~~
  - Set the routes, to redirect to the dist(distribution) folder
  ~~~
  "routes": [
    {
      "src": "/(.*)",
      "dest": "dist/$1"
    }
  ]
  ~~~

  - Project Linking
  - You should link a project via Vercel CLI in locally, run:
    - `vercel`

  - This create a .vercel directory, and will give you the vercel-org-id(org-id) and project(vercel-project-id)

  - Also we need to create a .github/workflows directory and inside crate a .yml file, for the deploy in Vercel, we add:
  ~~~
    - name: Deploy to Vercel
    uses: amondnet/vercel-action@v20 #deploy
    with:
      vercel-token: ${{ secrets.VERCEL_TOKEN }} # Required
      # github-token: ${{ secrets.GITHUB_TOKEN }} #Optional
      # vercel-args: '--prod' #Optional
      vercel-org-id: ${{ secrets.VERCEL_ORG_ID }} #Required
      vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }} #Required
      working-directory: ./
  ~~~
  - The VERCEL_TOKEN, we create in Dashboard -> Settings -> Tokens(https://vercel.com/account/tokens)
  - The variables in the settings options of the GitHub repository, then go to secrets and variables and then click in
  New repository secret.
  - In the .yml file, we call this variables with: ${{ secrets.NAME_OF_THE_SECRET }}

  - AlIAS_DOMAINS(Not working for the moment):
  You can also use any of the following variables anywhere in the domain:
    {USER} - the owner of the repository the action was executed in
    {REPO} - the name of the repository the action was executed in
    {BRANCH} - the branch in which the action was triggered
    {SHA} - the most recent commit's sha
    {PR} - the number of the pr the action was triggered from

    ~~~
      alias-domains: | #Optional
        https://{{BRANCH}}.courses-midudev-bootcamp-github-actions.vercel.app
    ~~~

    - To list aliases in Vercel:
      - `vercel alias list`

  - Protect to main branch:
    - Go to the repository -> Settings -> Branches -> click in Branch protection rules
    - In Branch name pattern, put: main
    - Check: 
      - Require status checks to pass before merging
      - Require branches to be up to date before merging

  - Cancel Previous Redundant Builds
    - We use the action [Cancel Workflow Action](https://github.com/marketplace/actions/cancel-workflow-action)
    - We put the step at the beginning:
      ~~~
      steps:
        - name: Cancel Previous Redundant Builds
          uses: styfle/cancel-workflow-action@0.9.1
          with:
            access_token: ${{ github.token }}
      ~~~
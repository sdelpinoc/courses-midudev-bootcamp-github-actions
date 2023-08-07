# Github actions

## Upload to GitHub and Vercel

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
      "src": "/dist",
      "use": "@vercel/static"
    }
  ]
  ~~~

  - Project Linking
  - You should link a project via Vercel CLI in locally, run:
    - `vercel`
  - This will give you the vercel-org-id(org-id) and project(vercel-project-id)

  
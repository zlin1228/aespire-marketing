
## Get started

This project uses `yarn` as its package manager.

```shell
yarn
```

## Running Storybook

To run Storybook locally, simply run:

```shell
yarn storybook
```

## Committing

This repository uses commit message linting to enforce
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). The basic commit structure is:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

If you are not familiar with the Conventional Commit types you can find them
[here](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type).

## Releasing

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) to manage the tagging and
release. `semantic-release` will automatically create a new release when a commit is merged into the `main` branch.

> The release will be based on the commit messages which is why it's imperative to follow the
> [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format.

`semantic-release` will NOT work on a templated project without a GitHub
[personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).
You will need to create a new token and add it to the GitHub secrets for the project with the variable name `GH_TOKEN`.

If you do **NOT** want to use `semantic-release` in your project, you can remove all of the code between the semantic
release comments in the [CICD workflow file.](.github/workflows/cicd.yml) and remove all devDependencies starting with
`@semantic-release`.
Contribution: 2022-06-15 20:00

Contribution: 2022-06-15 20:01

Contribution: 2022-06-16 20:00

Contribution: 2022-06-16 20:01

Contribution: 2022-06-16 20:02

Contribution: 2022-06-16 20:03

Contribution: 2022-06-24 20:00

Contribution: 2022-06-24 20:01

Contribution: 2022-06-27 20:00

Contribution: 2022-06-28 20:00

Contribution: 2022-06-28 20:01

Contribution: 2022-06-28 20:02

Contribution: 2022-06-29 20:00

Contribution: 2022-06-29 20:01

Contribution: 2022-06-30 20:00

Contribution: 2022-06-30 20:01

Contribution: 2022-06-30 20:02

Contribution: 2022-07-04 20:00

Contribution: 2022-07-04 20:01

Contribution: 2022-07-05 20:00

Contribution: 2022-07-05 20:01

Contribution: 2022-07-05 20:02

Contribution: 2022-07-05 20:03

Contribution: 2022-07-11 20:00

Contribution: 2022-07-12 20:00

Contribution: 2022-07-12 20:01

Contribution: 2022-07-12 20:02

Contribution: 2022-07-12 20:03

Contribution: 2022-07-15 20:00

Contribution: 2022-07-15 20:01

Contribution: 2022-07-15 20:02

Contribution: 2022-07-15 20:03

Contribution: 2022-07-19 20:00

Contribution: 2022-07-19 20:01

Contribution: 2022-07-19 20:02

Contribution: 2022-07-22 20:00

Contribution: 2022-07-22 20:01

Contribution: 2022-07-22 20:02

Contribution: 2022-07-22 20:03

Contribution: 2022-07-25 20:00

Contribution: 2022-07-27 20:00

Contribution: 2022-07-28 20:00

Contribution: 2022-07-28 20:01

Contribution: 2022-07-28 20:02

Contribution: 2022-08-01 20:00

Contribution: 2022-08-02 20:00

Contribution: 2022-08-09 20:00

Contribution: 2022-08-09 20:01

Contribution: 2022-08-11 20:00

Contribution: 2022-08-11 20:01

Contribution: 2022-08-11 20:02

Contribution: 2022-08-11 20:03

Contribution: 2022-08-16 20:00

Contribution: 2022-08-16 20:01

Contribution: 2022-08-16 20:02

Contribution: 2022-08-17 20:00

Contribution: 2022-08-17 20:01

Contribution: 2022-08-17 20:02

Contribution: 2022-08-17 20:03

Contribution: 2022-08-18 20:00

Contribution: 2022-08-19 20:00

Contribution: 2022-08-19 20:01

Contribution: 2022-08-19 20:02

Contribution: 2022-08-19 20:03

Contribution: 2022-08-22 20:00

Contribution: 2022-08-23 20:00

Contribution: 2022-08-26 20:00

Contribution: 2022-08-26 20:01

Contribution: 2022-08-30 20:00

Contribution: 2022-08-30 20:01

Contribution: 2022-08-31 20:00

Contribution: 2022-08-31 20:01

Contribution: 2022-08-31 20:02

Contribution: 2022-08-31 20:03

Contribution: 2022-09-01 20:00

Contribution: 2022-09-01 20:01

Contribution: 2022-09-05 20:00

Contribution: 2022-09-05 20:01

Contribution: 2022-09-05 20:02

Contribution: 2022-09-05 20:03

Contribution: 2022-09-06 20:00

Contribution: 2022-09-06 20:01

Contribution: 2022-09-08 20:00

Contribution: 2022-09-08 20:01

Contribution: 2022-09-12 20:00

Contribution: 2022-09-12 20:01

Contribution: 2022-09-13 20:00

Contribution: 2022-09-13 20:01

Contribution: 2022-09-16 20:00

Contribution: 2022-09-16 20:01

Contribution: 2022-09-19 20:00

Contribution: 2022-09-19 20:01

Contribution: 2022-09-19 20:02

Contribution: 2022-09-19 20:03

Contribution: 2022-09-21 20:00

Contribution: 2022-09-22 20:00

Contribution: 2022-09-22 20:01

Contribution: 2022-09-26 20:00

Contribution: 2022-09-27 20:00

Contribution: 2022-09-27 20:01

Contribution: 2022-09-29 20:00

Contribution: 2022-09-29 20:01

Contribution: 2022-09-29 20:02

Contribution: 2022-09-29 20:03

Contribution: 2022-09-30 20:00

Contribution: 2022-10-04 20:00

Contribution: 2022-10-04 20:01

Contribution: 2022-10-06 20:00

Contribution: 2022-10-10 20:00

Contribution: 2022-10-10 20:01

Contribution: 2022-10-12 20:00

Contribution: 2022-10-12 20:01

Contribution: 2022-10-17 20:00

Contribution: 2022-10-17 20:01

Contribution: 2022-10-17 20:02

Contribution: 2022-10-18 20:00

Contribution: 2022-10-18 20:01

Contribution: 2022-10-18 20:02

Contribution: 2022-10-25 20:00

Contribution: 2022-10-25 20:01

Contribution: 2022-10-25 20:02

Contribution: 2022-10-26 20:00

Contribution: 2022-10-26 20:01

Contribution: 2022-10-26 20:02

Contribution: 2022-11-01 20:00

Contribution: 2022-11-01 20:01

Contribution: 2022-11-01 20:02

Contribution: 2022-11-01 20:03

Contribution: 2022-11-04 20:00

Contribution: 2022-11-04 20:01

Contribution: 2022-11-04 20:02

Contribution: 2022-11-10 20:00

Contribution: 2022-11-21 20:00

Contribution: 2022-11-23 20:00

Contribution: 2022-11-23 20:01

Contribution: 2022-11-23 20:02

Contribution: 2022-11-23 20:03

Contribution: 2022-11-25 20:00

Contribution: 2022-11-25 20:01

Contribution: 2022-11-25 20:02

Contribution: 2022-11-25 20:03

Contribution: 2022-11-28 20:00

Contribution: 2022-11-28 20:01

Contribution: 2022-11-29 20:00

Contribution: 2022-11-29 20:01

Contribution: 2022-11-29 20:02

Contribution: 2022-12-01 20:00

Contribution: 2022-12-01 20:01

Contribution: 2022-12-01 20:02

Contribution: 2022-12-01 20:03

Contribution: 2022-12-02 20:00

Contribution: 2022-12-02 20:01

Contribution: 2022-12-06 20:00

Contribution: 2022-12-07 20:00

Contribution: 2022-12-12 20:00

Contribution: 2022-12-12 20:01

Contribution: 2022-12-14 20:00

Contribution: 2022-12-14 20:01

Contribution: 2022-12-14 20:02

Contribution: 2022-12-14 20:03

Contribution: 2022-12-15 20:00

Contribution: 2022-12-15 20:01

Contribution: 2022-12-15 20:02

Contribution: 2022-12-21 20:00

Contribution: 2022-12-21 20:01

Contribution: 2022-12-27 20:00

Contribution: 2022-12-27 20:01

Contribution: 2022-12-27 20:02

Contribution: 2022-12-28 20:00

Contribution: 2023-01-03 20:00

Contribution: 2023-01-11 20:00

Contribution: 2023-01-11 20:01

Contribution: 2023-01-11 20:02

Contribution: 2023-01-13 20:00

Contribution: 2023-01-13 20:01

Contribution: 2023-01-17 20:00

Contribution: 2023-01-18 20:00

Contribution: 2023-01-18 20:01

Contribution: 2023-01-18 20:02

Contribution: 2023-01-18 20:03

Contribution: 2023-01-23 20:00

Contribution: 2023-01-23 20:01

Contribution: 2023-01-25 20:00

Contribution: 2023-01-25 20:01

Contribution: 2023-01-25 20:02

Contribution: 2023-01-26 20:00

Contribution: 2023-01-26 20:01

Contribution: 2023-01-30 20:00

Contribution: 2023-01-30 20:01

Contribution: 2023-01-30 20:02

Contribution: 2023-01-30 20:03

Contribution: 2023-02-01 20:00

Contribution: 2023-02-01 20:01

Contribution: 2023-02-01 20:02

Contribution: 2023-02-03 20:00

Contribution: 2023-02-03 20:01

Contribution: 2023-02-03 20:02

Contribution: 2023-02-03 20:03

Contribution: 2023-02-07 20:00

Contribution: 2023-02-07 20:01

Contribution: 2023-02-07 20:02

Contribution: 2023-02-07 20:03

Contribution: 2023-02-08 20:00

Contribution: 2023-02-08 20:01

Contribution: 2023-02-13 20:00

Contribution: 2023-02-14 20:00


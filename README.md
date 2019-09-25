# Decoupled Drupal with GraphQL and React

## Prerequisites

- amazee.io local Docker development environment (https://docs.amazee.io/local_docker_development/local_docker_development.html)
- Composer (http://getcomposer.org)
- Yarn (http://yarnpkg.com)
- Node (http://nodejs.org)
- You must have port 80 and 443 available on your machine

### General Setup

First, you need to clone this repository.

```
git clone git@github.com:fubhy/drupal-decoupled-app
```

### Backend Setup

Then, you need to install the Drupal codebase via composer:

```
cd backend
composer install
```

Then, you need to boot the backend container.

```
docker-compose build
docker-compose up -d
```

Once connected to the container, you can now install Drupal.

You can either start with a fresh database:
```
drush si config_installer -y --account-name=admin --account-pass=admin
```

Or you can request remote access to live and dev databases by:

Pinging someone at amazee.io and get them to add your ssh key to the site.

Then:
```
docker-compose exec cli bash
# once in the container
drush sa
```

NOTE: `drush sa` should return drush aliases for dev, prod, etc

Then, once you have verified that aliases are working you can follow the
instructions on how to sync environments:
https://docs.amazee.io/drupal/synchronize_sites.html

Once the code, database, and files are sync'ed you can test your backend here:
```
http://2019-texascamp-org.docker.amazee.io
```

### Backend troubleshooting:

If you gave a different ssh key than your default `id_*` key then you need to:

```
pygmy addkey ~/.ssh/{your_key_name}
```

If that doesn't work go to:
```
http://docker.amazee.io/stats
```

And verify that your haproxy container is healthy and shows texas camp.

### Frontend development

Now you can create some content (basic page or article) and run the frontend application.

```
yarn run dev
```

Navigating to http://localhost:3000 should present you with a paginated list of articles
and by navigation to the path of one of the nodes (basic page or article) you just
created, you should see a simple teaser of that node.

### Frontend production mode

```
yarn run build && yarn run start
```

## License

This project is licensed under the MIT license, Copyright (c) 2016 Sebastian Siemssen. For more information see LICENSE.md.

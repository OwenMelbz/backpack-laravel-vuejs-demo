# Using VueJS and Backpack for Laravel

This demo project contains 3 components to do different things.

1. A custom field input for forms.
2. A data source which updates a global store.
3. A display component which renders the output of the global store.

## To install

- Clone the project to your computer
- Setup your database, vhosts etc within your .env
- Run `composer install` and `npm install` followed by `npm run dev`
- Run the laravel migrations with `php artisan migrate`

## To use

- Create a Backpack user as normal, then login!
- Browse to the "User" CRUD and see the custom form element.
- Use the shared state input in the sidebar to manipulate the data store.


## Steps taken

Each commit message contains basic instructions on what is going on during the commit.

Gradually it builds up the code base into what is shown here.

Below is a copy/paste of the steps taken - View the actual commits to see the code changes.

### Custom Field

#### Step 1

Add a new asset pipeline for your backpack assets using Laravel Mix

#### Step 2

Create your entry files e.g. backpack.js and backpack.scss

Within our CSS file we simply append some text for evidence that our CSS is loaded

Within our JS file we create a simple auto loader which will loop around all of the components we import and register them so they're available throughout Backpack

Then we've run `npm run watch` which has generated our mix manifest, which we will use later!

#### Step 3

We publish the "scripts" blade template from the vendor folder to allow us to globally add our custom scripts

At the bottom after everything else has loaded we use the mix helper to import our CSS and our JS

We add it at the end for perceived performance and to make sure everything else has loaded.

#### Step 4

We add the field that we want to create into our Crud Controller - setting the "type" to the name of the new blade file we're going to create

#### Step 5

We replicate an existing input field to make sure we still have the ability to use things like "hints"

#### Step 6

We then wrap the input field with a custom component which we'll create later.

We pass in the original input field as a slot so we can update the value of the input via our Vue component.

#### Step 7

We then create our vue component, doing what ever we need. This example imports an free "password strength" package which we interface with.

We are using a "watch" on line 25 to update the actual form element with the value returned from our Vue component.

We should now have a fully working custom field built with vue. If you're still running `npm run watch` this should have loaded for you.

We can confirm it's working in the next step.

#### Step 8

Here we just create a duplicate field, which displays the raw value of the database to prove that our component is updating the database! 

### Shared state amongst UI components

#### Step 1

Shared State - As each Vue component runs in its own "root" this means if you want to share state between multiple components you must use a "store" which all required components subscribe to.

#### Step 2

Shared State - To simply display the output in the top left bar of the website.

We do this by creating a component which imports the store, adds it to its "data" object to make it reactive

Then registering the component into our backpack.js autoloader array

Render the component by editing the published backpack template

#### Step 3

Shared State - Keeping it all in sync with other data sources.

We create a new component which also imports the store

This component however has a text box which allows us to mutate the data within the store.

We register it as well in the backpack.js

We also render it within our template!

You can now see, if you start typing in the sidebar which updates the global store, all other components which share this data will also update!

This allows you to easily keep data in sync across multiple components.

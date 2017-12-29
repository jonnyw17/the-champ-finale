#Core Concepts

## How Cypress queries the DOM?

Cypress leverages jQuery’s powerful selector engine to help make tests
familiar and readable for modern web developers.

Cypress wraps all DOM queries with robust retry-and-timeout logic

Cypress is asynchronous and relies on timeouts to know when to stop waiting on an app to get into the expected state.

## How does Cypress manages subjects and chains of commands?

### Chains of Command
It manages a Promise chain on your behalf, with each command yielding
a subject to the next command, until the chain ends or an error is encountered.

Cypress ensures that the element is able to be interacted with (like a real user
would). It will automatically wait until the element reaches an “actionable” state by:

 + Not being hidden
 - Not being covered
 - Not being disabled
 - Not animating

## What do assertions look like? How they work?

_Assertions_ - commands that enable you to describe the desired state of your application -> Assertions let you do things like ensuring an
element is visible or has a particular attribute, CSS class, or state.

### Subject Management

Some methods yield null and thus cannot be chained, such as cy.clearCookies()
or cy.screenshot().

Some methods, such as cy.get() or cy.contains(), yield a DOM element, allowing further commands to be chained onto them (assuming they expect a DOM subject)

Cypress commands do not return their subjects, they yield them. Remember:
Cypress commands are asynchronous and get queued for execution at a later time. During execution, subjects are yielded from one command to the next, and a lot of helpful Cypress code runs between each command to ensure everything is in order.

Using .then() To Act On A Subject
Want to jump into the command flow and get your hands on the subject directly?
No problem, simply add a .then() to your command chain. When the previous command resolves, it will call your callback function with the yielded subject as the first argument.

Commands Are Asynchronous
It is very important to understand that Cypress commands don’t do
anything at the moment they are invoked, but rather enqueue themselves
to be run later. This is what we mean when we say Cypress commands are
asynchronous.

Take this simple test, for example:

it('changes the URL when "awesome" is clicked', function() {
  cy.visit('/my/resource/path') // Nothing happens yet

  cy.get('.awesome-selector')   // Still nothing happening
    .click()                    // Nope, nothing

  cy.url()                      // Nothing to see, yet
    .should('include', '/my/resource/path#awesomeness') // Nada.
})

// Ok, the test function has finished executing...
// We've queued all of these commands and now
// Cypress will begin running them in order!

Cypress doesn’t kick off the browser automation magic until the test
function exits.

Core Concept
Each Cypress command (and chain of commands) returns immediately, having
only been appended to a queue of commands to be executed at a later time.

You purposefully cannot do anything useful with the return value from a
command. Commands are enqueued and managed entirely behind the scenes.

We’ve designed our API this way because the DOM is a highly mutable object
that constantly goes stale. For Cypress to prevent flake, and know when to
proceed, we manage commands in a highly controlled deterministic way.

You should think of assertions as guards.

Use your guards to describe what your application should look like, and Cypress will automatically block, wait, and retry until it reaches that state.

With Cypress, you don’t have to assert to have a useful test. Even without assertions, a few lines of Cypress can ensure thousands of lines of code are working properly across the client and server!

This is because many commands have a built in Default Assertion which offer you a high level of guarantee.

Example #3: Other Default Assertions

Other commands have other default assertions not related to the DOM.

For instance .its() requires that the property you’re asking about exists on the object.

// create an empty object
const obj = {}

// set the 'foo' property after 1 second
setTimeout(() => {
  obj.foo = 'bar'
}, 1000)

// .its() will wait until the 'foo' property is on the object
cy.wrap(obj).its('foo')


##How are timeouts applied to commands?

Almost all commands can time out in some way.

All assertions, whether they’re the default ones or whether they’ve been added by you all share the same timeout values.

Timeouts are modifiable globally and per command; will affect all default assertions and any assertions chained after that command.


##How do you organise your test and support files?

If you’re starting your first project, we recommend you use the structure seeded and given to you when Cypress dependency is installed.

##How do you group your tests?

The support file is a great place to put reusable behavior such as Custom Commands or global overrides that you want applied and available to all of your spec files.

From your support file you should also import or require other files to keep things organized.

##How do you run all tests in order

[Solutions]
- Label the tests in order
  - there should be a hacky work around for this..

Why you shouldn't run your tests in order?

No, you shouldn't need to run tests in any specific order. That is usually indicative of a testing anti pattern, whereby you are relying on state being built up between all the tests.

Circumstances to run test in order

1. Ordering tests could be convenient if you want to run the often failing tests first - saves time in the CI
2. When running live tests we are dealing with real customer data that is somewhat dependent on state
3. Sometimes in order for us to run our tests we need to hit real endpoints andß perform actual CRUD operations. If we cannot control what test packages are called in an order the tests will fail since clearing out and creating data in order is a big part of live testing.

##How would you deal with Async commands?

Remember Cypress uses an asynchronous API, so you would form a closure, using the .then().
Plus Using .then() functions is an excellent opportunity to use `debugger`. This can help you understand the order in which commands are run. This also enables you to inspect the objects that Cypress yields you in each command.

##What are Aliases? What makes them useful?

Aliases are a powerful construct in Cypress that have many uses.

Under the hood, aliasing basic objects and primitives utilizes `Mocha`'s shared context object. That is - aliases are available as this.\*.

Usefulness of Aliases;
  + Sharing Context - simplest way to use Aliases
    + Mocha automatically shares contexts for us across all applicable hooks for each test. Additionally these aliases and properties are automatically cleaned up after each test.
    + Using Fixtures - most common use case of Aliases
      + Often times you may load in a fixture in a beforeEach hook but want to utilize the values in your tests.
  + Aliasing DOM Elements
    + After you alias DOM elements, you can then later access them for reuse
    +  JS SPA's -> the DOM re-renders parts of the application constantly. If you alias DOM elements that have been removed from the DOM by the time you call cy.get() with the alias, Cypress automatically re-queries the DOM to find these elements again.

  + Alias Routes;
    + ensure your application makes the intended requests
    + wait for your server to send the response
    + access the actual XHR object for assertions

It's recommended
  + By using cy.get() we avoid the use of this.

      But just keep in mind - there are use cases for both approaches because they have different ergonomics.

      When using this.users we have access to it synchronously, whereas when using cy.get('\@users') it becomes an asynchronous command.

      You can think of the cy.get('\@users') as doing the same thing as cy.wrap(this.users).
  + To alias elements as soon as possible instead of further down a chain of commands


##When and where to use conditional testing?

Avoid at all costs, the main reason you wouldn't use conditional
tests is that if the test are not deterministic - if the tests do not work 100% of the time. Then it defeats the purpose of using Cypress,
where the main aim is make your tests flake free.

###Chapters Skipped

__1. Test Runner__ - https://docs.cypress.io/guides/core-concepts/test-runner.html#
__2. Dashboard Service__ - https://docs.cypress.io/guides/core-concepts/dashboard-service.html


#Index

| Word        | Part of Speech           | Definition  |
| ------------- |:-------------:| -----:|
| Yield      | verb      | an action that occurs in a computer program during multithreading, of forcing a processor to relinquish control of the current running thread, and sending it to the end of the running queue, of the same scheduling priority. |

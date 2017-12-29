# Applied_Collation

## Brief:
A lot of information given here, are the ones that you will use utilised.

## Recording your first run

### Notes
These are the chapters that will be gone through at the time.
- 2.1) Introduction to Cypress [27.12.2017]
- 2.2) Writing and Organising Tests [27.12.2017]
- 2.4) Variables and Aliases [27.12.2017]

Skipped Chapters
- 2.3) Interacting with Elements

Still want to use things such as stubbing

<br/>
## Timeouts

Timeouts can be configured globally, or on a per-command basis. There is a performance tradeoff here: tests that have longer timeout periods take longer to fail

## Default Assertions

 - cy.visit() expects the page to send text/html content with a 200 status code.
 - cy.request() expects the remote server to exist and provide a response.
 - cy.contains() expects the element with content to eventually exist in the DOM.
 - cy.get() expects the element to eventually exist in the DOM.
 - .find() also expects the element to eventually exist in the DOM.
 - .type() expects the element to eventually be in a typeable state.
 - .click() expects the element to eventually be in an actionable state.
 - .its() expects to eventually find a property on the current subject.
 - Certain commands may have a specific requirement that causes them to immediately fail without retrying: such as cy.request().

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

 There are two ways to write assertions in Cypress:

 Implicit Subjects: Using .should() or .and().
 Explicit Subjects: Using expect.
 - https://docs.cypress.io/guides/references/assertions.html#Chai

## Aliasing

Aliasing helps you to store and save element references for future use; using aliases to refer to previous subjects.


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


## .should()

When using a callback function with .should(), be sure that the entire function can be executed multiple times without side effects.
That means your code should be retry-safe. The technical term for this means your code must be idempotent.

## .then() to act on a subject

Want to jump into the command flow and get your hands on the subject directly?
No problem, simply add a .then() to your command chain. When the previous
command resolves, it will call your callback function with the yielded subject
as the first argument.


## Hooks

Test interface borrowed from Mocha.

Hooks - from Mocha

describe('Hooks', function() {
  before(function() {
    // runs once before all tests in the block
  })

  after(function() {
    // runs once after all tests in the block
  })

  beforeEach(function() {
    // runs before each test in the block
  })

  afterEach(function() {
    // runs after each test in the block
  })
})

The order of hook and test execution is as follows:

 - All before() hooks run (once)
 - Any beforeEach() hooks run
 - Tests run
 - Any afterEach() hooks run
 - All after() hooks run (once)

! Before writing after() or afterEach() hooks, please see our thoughts on the anti-pattern
of cleaning up state with after() or afterEach().


## Test Structure: Running Tests in order

[Solutions]
- Label the tests in order
  - there should be a hacky work around for this..

No, you shouldn't need to run tests in any specific order. That is usually indicative of a testing anti pattern, whereby you are relying on state being built up between all the tests.

Circumstances to run test in order

1. Ordering tests could be convenient if you want to run the often failing tests first - saves time in the CI
2. When running live tests we are dealing with real customer data that is somewhat dependent on state
3. Sometimes in order for us to run our tests we need to hit real endpoints andß perform actual CRUD operations. If we cannot control what test packages are called in an order the tests will fail since clearing out and creating data in order is a big part of live testing.

## Folder : Fixtures

Used as external pieces of static data that can be used by your tests.
You would typically use them with the cy.fixture() command and most often when you’re
stubbing Network Requests.


## Folder: Plugins

??? - the documentation is awful, does not give the user what kind of plugins, that can be used with cypress.io. Worse, not a single example.


## Folder: Support Files

The support file is a great place to put reusable behaviour such as Custom Commands or
global overrides that you want applied and available to all of your spec files.
From your support file you should also import or require other files to keep things
organised.

## Additional information
Information here is needed to be aware of aspects of the software - not particular what exactly is being written
Did you know you can write Unit Tests in Cypress?
Check out our example recipes for unit testing and unit testing React components

### Asynchronousity

It is very important to understand that Cypress commands don’t do anything at the moment they are invoked, but rather enqueue themselves to be run later. This is what we mean when we say Cypress commands are asynchronous.

### Chain of Command

It manages a Promise chain on your behalf, with each command yielding a subject to the next command, until the chain ends or an error is encountered.

### Assertions

You should think of assertions as guards.

Use your guards to describe what your application should look like, and Cypress will automatically block, wait, and retry until it reaches that state.

With Cypress, you don’t have to assert to have a useful test. Even without assertions, a few lines of Cypress can ensure thousands of lines of code are working properly across the client and server!

This is because many commands have a built in Default Assertion which offer you a high level of guarantee.


### Actionable State

Simple, Cypress usually waits till an element can reach, what's been referred in the title. As actionable state;

- Not being hidden
- Not being covered
- Not being disabled
- Not animating

Ensuring an element is visible or has a particular attribute, CSS class, or state. Even more - action commands will automatically wait for their element to reach an actionable state before failing.
All DOM based commands automatically wait for their elements to exist in the DOM. You never need to write .should('exist') after a DOM based command.

### Subject Management

Essentially, check what each cy.[command] yields, before deciding to chain. Cypress commands do not return their subjects, they yield them. Remember: Cypress commands are asynchronous and get queued for execution at a later time. During execution, subjects are yielded from one command to the next, and a lot of helpful Cypress code runs between each command to ensure everything is in order.

- Some methods yield null and thus cannot be chained, such as cy.clearCookies() or cy.screenshot().

- Some methods, such as cy.get() or cy.contains(), yield a DOM element, allowing further commands to be chained onto them (assuming they expect a DOM subject) like .click() or even cy.contains() again.

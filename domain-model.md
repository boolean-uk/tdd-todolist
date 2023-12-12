# Domain Models

## Create Todo

```
As a user,
I should be able to create a todo item,
I want to be able to see its ID, description and have it incompleted to start.
```

### Keywords

**1. Verbs:** create, see
**2. Nouns:** item, ID, description, incompleted

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| createTodo | (description) | description(@string), ID(@number), completedStatus(@boolean) | if there is a string | return a string with the description
| ------ | ------ | ------ | ----- | return false

## Get Todos

```
a user,
should be able to see all todo items,
they should be in a list.
```

### Keywords

**1. Verbs:** see
**2. Nouns:** items, list

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| getTodos | () | description(@string) | if descriptions available to grab  | return descriptions as a string
| ------ | ------ | ------ | ----- | return "No todo items"

## Set todo to completed

```
As a user,
I should be able to complete a todo item,
I would like to click an item and see it change to completed.
```

### Keywords

**1. Verbs:** complete, click, see, change
**2. Nouns:** user, item, completed

### Table

| Methods | Inputs | Data | Scenario | Outputs
| setTodo | ------ | ------ | ----- | -----
| ------ | ------ | ------ | ----- | ----

## Next Function

```
who,
what,
how.
```

### Keywords

**1. Verbs:**
**2. Nouns:**

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| ------ | ------ | ------ | ----- | -----
| ------ | ------ | ------ | ----- | -----
| ------ | ------ | ------ | ----- | -----

## Next Function

```
who,
what,
how.
```

### Keywords

**1. Verbs:**
**2. Nouns:**

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| ------ | ------ | ------ | ----- | -----
| ------ | ------ | ------ | ----- | -----
| ------ | ------ | ------ | ----- | -----

## Next Function

```
who,
what,
how.
```

### Keywords

**1. Verbs:**
**2. Nouns:**

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| ------ | ------ | ------ | ----- | -----
| ------ | ------ | ------ | ----- | -----
| ------ | ------ | ------ | ----- | -----

## Next Function

```
who,
what,
how.
```

### Keywords

**1. Verbs:**
**2. Nouns:**

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| ------ | ------ | ------ | ----- | -----
| ------ | ------ | ------ | ----- | -----
| ------ | ------ | ------ | ----- | -----

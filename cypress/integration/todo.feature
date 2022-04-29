@my-tag
Feature: Todo

  Background:
    Given the user views "/todo"

  Scenario: Adding todo item
    Given two todo items are shown

    When the user adds the todo "Feed the cat"
    Then three todo items are shown
    And the last item contains the text "Feed the cat"

/*
Create a todo list where each item has the following properties (values up to you):

{
  assignee: "Alice Adams",
  title: "Walk the dog",
  description: "avoid 23rd street, barks too much",
  isCompleted: false
}


Requirements...
- a component that displays the list of todos
- another component to add a todo item to the list
- another component to search the list by the assignee name
- the component to add an item needs inputs for assignee,
    title, and description along with a button that will add it to the list
- the assignee search component will reactively filter the task 
    list and only display tasks whose assignee name matches part or all of the search input
- should be able to mark an existing item as completed
- completed items should indicate strike through titles when in list component
- item descriptions should be hidden unless a user clicks on an expand element


What we're looking for:
- clear separation of concerns
- idiomatic Vue.js usage (slots, props, methods, computed etc...)
- good naming conventions (components, props, methods, etc...)
- it should work


Things to avoid:
- CSS (bonus if it looks nice, but we're looking for composition structure more than style)
- API calls (local data is fine, no need use a real data source)
*/

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");

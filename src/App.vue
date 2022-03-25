<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/personals">Сотрудники</router-link>
  </nav>
  <router-view/>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
  table {
    width:100%;
    font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
    font-size: 14px;
    border-collapse: collapse;
    text-align: center;
  }
  th{
    background: rgba(76, 191, 127, 0.65);
    color: #767676;
    font-weight:bolder ;
    text-shadow: 1px 1px 1px #ffffff;
    padding: 10px 20px;
  }
  th, td {
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: white;
    text-align: center;
  }
  td {
    background: #D8E6F3;
  }
  td:first-child, td:last-child{
    width: 10px;
  }
  th:first-child, td:first-child {
    padding: 10px 20px;
    text-align: left;
  }
  td:first-child {

    table-layout: auto;
  }
  input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    margin:10px 0;
  }

  label {
    padding: 12px 12px 12px 0;
    display: inline-block;
  }

  input[type=text]:focus {
    background-color: lightblue;
  }
  .add_button {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin:10px 0;

    background-color: rgba(51, 125, 247, 0.53);
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
</style>

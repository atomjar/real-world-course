<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
#app {
  width: 500px;
  padding: 0 20px;
  margin: 0 auto;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
a {
  color: #39b982;
  font-weight: 600;
  background-color: transparent;
}
img {
  border-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
}
h1 {
  font-size: 50px;
  font-weight: 700;
}
h2 {
  font-size: 38px;
  font-weight: 700;
}
h3 {
  font-size: 28px;
  font-weight: 700;
}
h4 {
  font-size: 21px;
  font-weight: 700;
}
h5 {
  font-size: 16px;
  font-weight: 700;
}
h6 {
  font-size: 15px;
  font-weight: 700;
}
b,
strong {
  font-weight: bolder;
}
small {
  font-size: 80%;
}
.eyebrow {
  font-size: 20px;
}
.-text-primary {
  color: #39b982;
}
.-text-base {
  color: #000;
}
.-shadow {
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.13);
}
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
.badge {
  display: inline-flex;
  height: 26px;
  width: auto;
  padding: 0 7px;
  margin: 0 5px;
  background: transparent;
  border-radius: 13px;
  font-size: 13px;
  font-weight: 400;
  line-height: 26px;
}
.badge.-gradient {
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  color: #fff;
}
.meta {
  display: inline-flex;
  align-items: center;
  color: rgba(0,0,0,0.4);
  font-size: 1rem;
  font-weight: 600;
}
.meta .icon {
  margin-right: 6px;
}
button,
label,
input,
optgroup,
select,
textarea {
  font-family: "Open sans", sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: none;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 2px solid #39b982;
}
input,
textarea {
  box-sizing: border-box;
  width: 100%;
  border: solid 1px rgba(0,0,0,0.4);
}
textarea {
  font-size: 20px;
  overflow: auto;
}
input[type="text"] {
  height: 52px;
  padding: 0 10px;
  font-size: 20px;
}
input[type="text"]:focus {
  border-color: #39b982;
}
label {
  color: rgba(0,0,0,0.5);
  font-weight: 700;
}
.input-inline {
  position: relative;
}
.input-inline input {
  position: relative;
  padding-right: 70px;
}
.input-inline.-button-right button {
  position: absolute;
  top: 0;
  right: 0;
}
.input-inline.-button-right button:hover {
  -webkit-transform: scale(1);
          transform: scale(1);
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
[hidden] {
  display: none;
}
button,
.button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  padding: 0 40px;
  background: transparent;
  border: none;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s linear;
}
button:hover,
.button:hover {
  -webkit-transform: scale(1.02);
          transform: scale(1.02);
  box-shadow: 0 7px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
button:active,
.button:active {
  -webkit-transform: scale(1);
          transform: scale(1);
  box-shadow: none;
}
button.-fill-gradient,
.button.-fill-gradient {
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  color: #fff;
}
button.-fill-gray,
.button.-fill-gray {
  background: rgba(0,0,0,0.5);
  color: #fff;
}
button.-size-small,
.button.-size-small {
  height: 32px;
}
button.-icon-right,
.button.-icon-right {
  text-align: left;
  padding: 0 20px;
}
button.-icon-right > .icon,
.button.-icon-right > .icon {
  margin-left: 10px;
}
button.-icon-left,
.button.-icon-left {
  text-align: right;
  padding: 0 20px;
}
button.-icon-left > .icon,
.button.-icon-left > .icon {
  margin-right: 10px;
}
button.-icon-center,
.button.-icon-center {
  padding: 0 20px;
}
</style>

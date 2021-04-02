old css

@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

- {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }
  :root {
  --primaryColor: #333;
  --secondaryColor: #eee;
  --primaryText: #eee;
  }
  body {
  font-family: "Poppins", sans-serif;
  background: var(--secondaryColor);
  color: var(--primaryColor);
  line-height: 1.6;
  }
  /_ navbar _/
  .navbar {
  position: relative;
  top: 0;
  z-index: 2;
  width: 100vw;
  }
  .navbar-nav {
  position: absolute;
  list-style: none;
  display: flex;
  width: 100%;
  align-items: center;
  /_ padding-top: 50px; _/
  /_ justify-content: space-around; _/
  }
  .nav-item {
  letter-spacing: 2px;
  /_ width: 100%; _/
  }
  .nav-item:first-child {
  margin-right: auto;
  padding-left: 60px;
  }
  .nav-item:not(:first-child) {
  margin-left: auto;
  }
  .nav-item:nth-child(4) {
  margin-right: 40px;
  }
  .logo {
  min-width: 175px;
  }
  .nav-item a {
  /_ position: relative;
  display: block; _/
  text-decoration: none;
  color: var(--secondaryColor);
  cursor: pointer;
  padding: 13px 25px;
  /_ doesnt work for responsive _/
  /_ margin: 0px 20px; _/
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.5s;
  }
  .nav-item:hover a {
  background-color: rgba(255, 255, 255, 0.5);
  color: var(--primaryColor);
  backdrop-filter: blur(3rem);
  }

/_ responsive navbar _/
.burger {
display: none;
cursor: pointer;
position: absolute;
}
.burger div {
background-color: blue;
width: 25px;
height: 3px;
margin: 5px;
}

/_ Image Slider _/
.slider {
position: relative;
overflow: hidden;
width: 100vw;
height: 100vh;
top: 0;
}
.slide {
position: absolute;
height: 100%;
width: 100%;
top: 0;
left: 0;
opacity: 0;
transition: opacity 0.5s ease-in-out;
}
.slide.current {
opacity: 1;
}
.slide .content {
position: absolute;
width: 600px;
bottom: 60px;
background-color: rgba(255, 255, 255, 0.5);
/_ background: linear-gradient(
to right bottom,
rgba(255, 255, 255, 0.7),
rgba(255, 255, 255, 0.3)
); _/
color: var(--primaryColor);
padding: 30px;
opacity: 0;
/_ backdrop-filter: blur(2rem); _/
}
.slide .content h1 {
margin-bottom: 15px;
}
.slide.current .content {
opacity: 1;
transition: all 0.7s ease-in-out 0.3s;
}

.buttons button#nextBtn {
position: absolute;
top: 50%;
right: 15px;
}
.buttons button#prevBtn {
position: absolute;
top: 50%;
left: 15px;
}
.buttons button {
border: 2px solid var(--secondaryColor);
background-color: transparent;
color: var(--secondaryColor);
padding: 13px 15px;
border-radius: 50%;
cursor: pointer;
outline: none;
}

.buttons button:hover {
background-color: var(--secondaryColor);
color: var(--primaryColor);
}
/_ background image _/
.slide:first-child {
background: url(./images/20180308_185548-01.jpeg) no-repeat center
center/cover;
}
.slide:nth-child(2) {
background: url(./images/20180308_183644-01.jpeg) no-repeat center top/cover;
}
.slide:nth-child(3) {
background: url(./images/20171231_005737.jpg) no-repeat center top/cover;
}
.slide:nth-child(4) {
background: url(./images/20180517_131544.jpg) no-repeat center top/cover;
}
.slide:nth-child(5) {
background: url(./images/IMG_8046.JPG) no-repeat center top/cover;
}

.quote {
position: relative;
display: flex;
justify-content: center;
height: 25vh;
align-items: center;
font-size: 1.5rem;
width: auto;
}
.quote p::before {
content: open-quote;
font-size: 3rem;
color: rgb(0, 0, 0);
/_ display: block; _/
}
.quote p::after {
content: close-quote;
font-size: 3rem;
color: rgb(0, 0, 0);
/_ display: block; _/
}

/_ responsive _/

@media screen and (max-width: 600px) {
.slide .content {
bottom: -300px;
left: 0;
width: 100%;
}
.slide.current .content {
transform: translateY(-300px);
}
}

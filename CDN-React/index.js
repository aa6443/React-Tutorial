// ReactDOM.render(<p>React is amazing and easy and fun to write</p>,document.getElementById("root"))

// ReactDOM.render(
//     <ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//     </ul>,
//     document.getElementById("root")
// )

//creating custom function and rendering 
/*
function MainContent(){
    return(
        <h2>This is a custom reusable component</h2>
    )
}
function Header(){
    return(
        <h1>This is header of the page </h1>
    )
}

ReactDOM.render(
    <div>
        <Header />
        <MainContent />
    </div>,
    document.getElementById("root")
)
*/
/* // This is imperative way to code in react ->we have to explicitly declare everything by ourselves 

const h1 = document.createElement("h1")
h1.textContent = "This is imperative way to learn to code in react"
h1.className = "header"
document.getElementById("root").append(h1)

*/
/*  // This is declarative way to code in react -> we just declare and react will figure out what is going on 
ReactDOM.render(<h1>This is declarative way to learn react</h1>,
    document.getElementById("root")
)
*/
/*
const element = <h1>Yadhu is a bitch </h1>
console.log(element)
ReactDOM.render(element,document.getElementById("root"))
*/
const navbar = (
    <nav>
        <h1>Aniket's Restaurant</h1>
        <ul>
            <li>About </li>
            <li>Contact Us</li>
            <li>Order</li>
        </ul>
    </nav>
)
ReactDOM.render(navbar,document.getElementById("root"))
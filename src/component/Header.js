const Header =() =>{

    return(

        <header className="flex poppins space-between gray medieum fs-12 align-center">
      
      
        <div className="gradient-1 fs-32 bold">
          GASLUR  
        </div>
    
        <nav >
          <ul className="flex flex-gap  ">
          <li className="bold gradient-1"> <a href="">HOME</a></li>
          <li><a href="">MY PROFILE</a></li>
          <li><a href="">ACTIVITY</a></li>
          <li><a href="">HOW IT WORKS</a></li>
          </ul>
         
        </nav>
        <div className="flex flex-gap align-center">
          <div className="btn-create "><a >CREATE</a></div>
          <div><a className="hover " href="">SIGN IN</a></div>
        </div>
      </header>

    )

}
export default Header
import {} from 'react';
import '../Css/Footer.Module.css';

function Footer() {
  return (
    <>
        <footer>
        <footer className="main_footer container">
    
    <div className="content">
        <div className="colfooter">
            
            <h3 className="titleFooter"> Menu</h3>
            
            <ul>
            
              <li><a href="./index.html" title="Main page">Main Page</a></li>
              <li><a href="#" title="About me">About Me</a></li>
              <li><a href="https://github.com/RafaelAutieri" title="Projects">Projects</a></li>
              <li><a href="https://wa.me/5511963031265" title="Talk to me">Talk To Me</a></li>
            
            </ul>
        </div>       
        <div className="colfooter">
           
           <h3 className="titleFooter"> Contact</h3>
           <p><i className="icon icon-mail"></i> rafael_autieri@hotmail.com</p>
           <p><i className="icon icon-phontitleFootere"></i> 11 96303-1265</p>
           <p><i className="icon icon-whatsapp"></i> 11 2414-1962</p>
        </div>
        <div className="colfooter">
           
           <h3 className="titleFooter">Social Media</h3>
            
           <a href="https://www.facebook.com/rafael.autieri.3/" className="botao"><span> <i className="fa-brands fa-facebook"></i> </span></a>            
           <a href="https://www.instagram.com/rafa_autieri/" className="botao"><span> <i className="fa-brands fa-instagram" ></i></span></a>       
           <a href="https://twitter.com/rafa_autieri" className="botao"><span> <i className="fa-brands fa-twitter"></i> </span></a>            
           <a href="https://www.youtube.com/channel/UCxcH86shFHaBKM2-CVxp98g" className="botao"><span> <i className="fa-brands fa-youtube"></i> </span></a>            
        </div>
        <div className="clear"></div>
    
    </div>
    <div className="main_footer_copy">
        
        <p className="m-b-footer"> Curriculum - 2023, all rights reserved.</p> 
        <p className="by"><i className="icon icon-heart-3"></i> Developed by: <a href="#" title="RafaelAutieri">RafaelAutieri</a></p>
    
    </div>
</footer>
        </footer>
    </>
  )
}

export default Footer

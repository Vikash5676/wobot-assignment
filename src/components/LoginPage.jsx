import React,{useState} from 'react'
import './LoginPage.css'
import logo from './logo_wobot.png'
import logo1 from './woobot.png'

const LoginPage = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionChange = (event,id) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value)
    
    };
    
  return (
    <div style={{position:'relative',width: '100%',height:'100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}>
        <img className='img1' src={logo}  alt=''/>
        <div className="main-container">
            
            
            <div className="logo"><img src={logo1} alt="" /></div>
            <div className="header1 center bold">
                It's delight to have
            </div>
            <div className="header2 center bold n-margin">you onboard</div>
            <div className="par1 center p-margin">Help us to know you better.</div>
            <div className="par2 center p-margin">(This is how we optimize wobot as</div>
            <div className="par3 center">per your need)</div>

            <label for="name" class="form-label" style={{marginTop:'3rem'}}>Your Name</label><br />
            <input type="text" class="form-control n-margin" id="name" placeholder='e.g.John Smaith'/>
            <label for="company" class="form-label p-margin">Company Name</label><br />
            <input type="text" class="form-control n-margin" id="company" placeholder='e.g.Alpha Inc'/>
            
            <label for="select_ind" class="form-label p-margin">Industry</label><br />
            <select class="form-select n-margin" aria-label="Default select example" id='select_ind'>
            <option selected>select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
            
            <div className='p-margin'>Number of locations</div>
            <div className="p-div">
            <div class="form-check">
                <input class="form-check-input"  type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={'option1'} checked={selectedOption === "option1"}
                onChange={handleOptionChange}/>
                <label  className={`form-check-label ${selectedOption === 'option1' ? 'active' : ''}`} for="flexRadioDefault1">
                    1-20
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value={'option2'} checked={selectedOption === "option2"}
                onChange={handleOptionChange}/>
                <label className={`form-check-label ${selectedOption === 'option2' ? 'active' : ''}`} for="flexRadioDefault2">
                    21-50
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value={'option3'} checked={selectedOption === "option3"}
                onChange={handleOptionChange}/>
                <label  className={`form-check-label ${selectedOption === 'option3' ? 'active' : ''}`} for="flexRadioDefault3">
                    51-200
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" value={'option4'} checked={selectedOption === "option4"}
                onChange={handleOptionChange}/>
                <label  className={`form-check-label ${selectedOption === 'option4' ? 'active' : ''}`} for="flexRadioDefault4">
                    201-500
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" value={'option5'} checked={selectedOption === "option5"}
                onChange={handleOptionChange}/>
                <label  className={`form-check-label ${selectedOption === 'option5' ? 'active' : ''}`} for="flexRadioDefault5">
                    500+
                </label>
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Get Started</button>
            <div className="last">
            <a href="#" style={{marginRight:'5px'}}>Terms of use</a><span style={{marginRight:'5px'}}>|</span> <a href="#">Privacy policy</a>
        </div>
        </div>
        
    </div>
  )
}

export default LoginPage
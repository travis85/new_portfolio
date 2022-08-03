import React from 'react'
import Styles from '../styles/Email.module.css'

export default function EmailForm() {
    return (
      <>
      
        <div className={Styles.container}>
            <div className={Styles.formContainer}>
                <form class="form-floating " >
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingPassword" placeholder="Name" />
                        <label for="floatingPassword">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea class="form-control" placeholder="Leave a message here" id="floatingTextarea" style={{height: '200px'}}></textarea>
                        <label for="floatingTextarea">Message</label>
                        </div>
                        <input type='submit'></input>
                </form>
            </div>
        </div>  
        </>
    )
}

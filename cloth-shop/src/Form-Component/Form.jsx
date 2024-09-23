import { useState } from "react";
import styles from "./Form.module.css";
// import List from "./List";

function Form() {
  //****  form inputs state  *****/
  const [form, setForm] = useState({
    name: "",
    family: "",
    tel: "",
    mail: "",
    pass: "",
    repass: "",
    agree: false,
  });


  //***** list form data state************ */
  const [data, setData] = useState([]);

  //****  input change event function   *****/
  const handleInpchange = (event) => {
    if (event.target.name == "agree") {
      setForm((form) => ({ ...form, agree: !form.agree }));
      console.log(form);
    } else {
      setForm((form) => ({ ...form, [event.target.name]: event.target.value }));
      console.log(event.target.value);
    }
  };

  //***input focus event handler ****/
  const handleInpfocus = (event) => {
    const inputname = document.getElementsByName(event.target.name)[0];
    if (inputname)
      inputname.style.transform = "scale(1.03)";
  };

  //**** input regex   *****/
  const regex = /^[a-zA-Z]+$/;
  const familyregex = /^[a-zA-Z]+$/;
  const mailregex =
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
  const telregex = /^\d{11}$/;
  const passregex =
    /^[A-Z](?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;

  //***********************  validate function******************************/
  const validateName = (name) => {
    return name.length > 0 && regex.test(name);
  };
  const validateFamily = (family) => {
    return family.length > 0 && familyregex.test(family);
  };
  const validateTel = (tel) => {
    return tel.length > 0 && telregex.test(tel);
  };
  const validatePass = (pass) => {
    return pass.length > 0 && passregex.test(pass);
  };
  const validateEmail = (mail) => {
    return mail.length > 0 && mailregex.test(mail);
  };

  //****  input blur event handler  *****/
  const handleInpblur = (event) => {
    const inputValue = event.target.value;
    const inputname = document.getElementsByName(event.target.name)[0];
    if (regex.test(inputValue) && event.target.name == "name") {
      inputname.style.border = "2px solid green";
    }
    else if (familyregex.test(inputValue) && event.target.name == "family")
      inputname.style.border = "2px solid green";
    else if (mailregex.test(inputValue) && event.target.name == "mail")
      inputname.style.border = "2px solid green";
    else if (telregex.test(inputValue) && event.target.name == "tel")
      inputname.style.border = "2px solid green";
    else if (passregex.test(inputValue) && event.target.name == "pass")
      inputname.style.border = "2px solid green";
    else if (inputValue == form.pass.valueOf() && event.target.name == "repass")
      inputname.style.border = "2px solid green";
    else
      inputname.style.border = "2px solid red";

  };
  //***input click event handler  ****/
  const handleBtnclick = (event) => {
    event.preventDefault();
    if (!validateName(form.name)) {
      document.getElementsByName("name")[0].placeholder = "Please Enter Name";
      document.getElementsByName("name")[0].style.border = "2px solid red";
      document.getElementsByName("name")[0].animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-8px)" },
          { transform: "translateX(8px)" },
          { transform: "translateX(-5px)" },
          { transform: "translateX(0)" },
        ],
        {
          duration: 1000,
        },
      );
    }
    else if (!validateFamily(form.family)) {
      document.getElementsByName("family")[0].placeholder = "Please Enter Family";
      document.getElementsByName("family")[0].style.border = "1px solid red";
      document.getElementsByName("family")[0].animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-8px)" },
          { transform: "translateX(8px)" },
          { transform: "translateX(-5px)" },
          { transform: "translateX(0)" },
        ],
        {
          duration: 1000,
        },
      );
    }
    else if (!validateTel(form.tel)) {
      document.getElementsByName("tel")[0].placeholder = "Please Enter tel";
      document.getElementsByName("tel")[0].style.border = "1px solid red";
      document.getElementsByName("tel")[0].animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-8px)" },
          { transform: "translateX(8px)" },
          { transform: "translateX(-5px)" },
          { transform: "translateX(0)" },
        ],
        {
          duration: 1000,
        },
      );
    }
    else if (!validateEmail(form.mail)) {
      document.getElementsByName("mail")[0].placeholder = "Please Enter mail";
      document.getElementsByName("mail")[0].style.border = "1px solid red";
      document.getElementsByName("mail")[0].animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-8px)" },
          { transform: "translateX(8px)" },
          { transform: "translateX(-5px)" },
          { transform: "translateX(0)" },
        ],
        {
          duration: 1000,
        },
      );
    }
    else if (!validatePass(form.pass)) {
      document.getElementsByName("pass")[0].placeholder = "Please Enter pass";
      document.getElementsByName("pass")[0].style.border = "1px solid red";
      document.getElementsByName("pass")[0].animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-8px)" },
          { transform: "translateX(8px)" },
          { transform: "translateX(-5px)" },
          { transform: "translateX(0)" },
        ],
        {
          duration: 1000,
        },
      );
    }
    else if (form.repass != form.pass) {
      document.getElementsByName("repass")[0].placeholder = "Please Re-enter pass";
      document.getElementsByName("repass")[0].style.border = "1px solid red";
      document.getElementsByName("repass")[0].animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-8px)" },
          { transform: "translateX(8px)" },
          { transform: "translateX(-5px)" },
          { transform: "translateX(0)" },
        ],
        {
          duration: 1000,
        },
      );
    }
    else if (!form.agree) {
      // alert("please checked check box");
      document.getElementById("lblagree").style.color = " red";
      document.getElementById("lblagree").animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-8px)" },
          { transform: "translateX(8px)" },
          { transform: "translateX(-5px)" },
          { transform: "translateX(0)" },
        ],
        {
          duration: 1000,
        },
      );
    }
    else {
      setData((data) => [...data, form]);
      document.getElementsByName("name")[0].style.border = "1px solid green";
      document.getElementById("lblagree").style.color = " white";

      // setForm({
      //   name: "",
      //   family: "",
      //   tel: "",
      //   mail: "",
      //   pass: "",
      //   repass: "",
      //   agree: false,
      // })
      console.log(form)
    }
    if (form.name.valueOf() === "") {
      document.getElementsByName("name")[0].placeholder = "Please Enter Name";
      document.getElementsByName("name")[0].style.border = "1px solid red";
    }

    else if (!regex.test(form.name)) {
      document.getElementsByName("name")[0].value = "";
      document.getElementsByName("name")[0].placeholder = "Name is incorrect!!";
    }
    else if (form.family.valueOf() === "") {
      document.getElementsByName("family")[0].placeholder = "Please Enter Family";
      document.getElementsByName("family")[0].style.border = "1px solid red";
    }
    else if (!familyregex.test(form.family)) {
      document.getElementsByName("family")[0].value = "";
      document.getElementsByName("family")[0].placeholder = "family is incorrect!!";
    }

    else if (form.tel.valueOf() === "") {
      document.getElementsByName("tel")[0].placeholder = "Please Enter Tel";
      document.getElementsByName("tel")[0].style.border = "1px solid red";
    }
    else if (!telregex.test(form.tel)) {
      document.getElementsByName("tel")[0].value = "";
      document.getElementsByName("tel")[0].placeholder = "The phone number is wrong (must be 11 digits)";
    }
    else if (form.mail.valueOf() === "") {
      document.getElementsByName("mail")[0].placeholder = "please Enter Mail !!!";
      document.getElementsByName("mail")[0].style.border = "1px solid red";
    }
    else if (!mailregex.test(form.mail)) {
      document.getElementsByName("mail")[0].value = "";
      document.getElementsByName("mail")[0].placeholder = " The email is wrong";
    }
    else if (form.pass.valueOf() === "") {
      document.getElementsByName("pass")[0].placeholder = "please Enter Password!!!";
      document.getElementsByName("pass")[0].style.border = "1px solid red";
    }
    else if (!passregex.test(form.pass)) {
      document.getElementsByName("pass")[0].value = "";
      document.getElementsByName("pass")[0].placeholder = " The password is wrong ";
    }

    else if (form.repass.valueOf() === "") {
      document.getElementsByName("repass")[0].placeholder = "please Enter Mail !!!";
      document.getElementsByName("repass")[0].style.border = "1px solid red";
    }
    else if (form.repass != form.pass) {
      document.getElementsByName("repass")[0].value = "";
      document.getElementsByName("repass")[0].placeholder = "Passwords do not match";
    }
    else if (!form.agree) alert("please checked check box");
    //   else {
    //     setData((data) => [...data, form]);
    //     document.getElementsByName("name")[0].style.border = "2px solid green";
    //   setForm({
    //     name: "",
    //     family: "",
    //     tel: "",
    //     mail: "",
    //     pass: "",
    //     repass: "",
    //     agree: false,
    //   })
    // }
  }
  return (
    <>
      <div className="position-relative w-full h-[1000px] [ bg-[url('../../src/assets/login/login2.jpg')]  bg-no-repeat bg-cover bg-center ">
        <div className=" position-absolute bottom-[20%] left-[35%] flex w-[500px] h-[700px] mt-[200px]  mr-auto ml-auto  bg-black/25 rounded-md backdrop-blur-xl 
        border-2 border-white/10 flex-1 flex-col justify-center  px-6 py-12 ">

          <p className={styles.pSing}>sing up | create Account </p>
          <div className={styles.divForm}>
            <form name="myform" action="">
              <input
                className={styles.Inp}
                onFocus={(e) => handleInpfocus(e)}
                onBlur={(e) => handleInpblur(e)}
                onChange={handleInpchange}
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
              <input
                className={styles.Inp}
                onFocus={(e) => handleInpfocus(e)}
                onBlur={(e) => handleInpblur(e)}
                onChange={handleInpchange}
                name="family"
                type="text"
                placeholder="Enter Your Family"
              />
              <input
                className={styles.Inp}
                onFocus={(e) => handleInpfocus(e)}
                onBlur={(e) => handleInpblur(e)}
                onChange={handleInpchange}
                name="tel"
                type="tel"
                placeholder="Enter Your Tel"
              />
              <input
                className={styles.Inp}
                onFocus={(e) => handleInpfocus(e)}
                onBlur={(e) => handleInpblur(e)}
                onChange={handleInpchange}
                name="mail"
                type="mail"
                placeholder="Enter Your Email"
              />
              <input
                className={styles.Inp}
                onFocus={(e) => handleInpfocus(e)}
                onBlur={(e) => handleInpblur(e)}
                onChange={handleInpchange}
                type="password"
                name="pass"
                placeholder="Enter password"
              />
              <input
                className={styles.Inp}
                onFocus={(e) => handleInpfocus(e)}
                onBlur={(e) => handleInpblur(e)}
                onChange={handleInpchange}
                type="password"
                name="repass"
                placeholder="Re-enter password"
              />
              <div className="mt-4">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  onChange={handleInpchange}
                ></input>
                <label className="mb-5" id="lblagree" htmlFor="agree">
                  I agree to the terms and conditions
                </label>
              </div>
              <button onClick={(e) => handleBtnclick(e)}
                className="flex w-7/12 m-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                type="submit">
                Sing up
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <List alldata={data} setAlldata={setData} /> */}
    </>
  );
}
export default Form;
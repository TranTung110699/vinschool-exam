import React,{ Component } from "react";
import Modal from "react-responsive-modal";
import '../Menu/Menu.css';
import './MenuBeforeLogin.css';
import menulogo from './images/logo-vinschool.png';

class MenuBeforeLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            login: false
        }
    }


    onOpenModalLogin = () => {
        this.setState({ login: true });
    };

    onCloseModalLogin = () => {
        this.setState({ login: false });
    };



    render() {
        const { email,password,login } = this.state;

        return (
            <>
                <header className="menu">
                    <nav className="menu_navigation">
                        <div className="menu_logo">
                            <a href={{}}><img src={menulogo} /></a>
                        </div>
                        <div className="spacer">
                            <div style={{color:'white'}} align="center">Bạn vui lòng đăng nhập để thực hiện tác vụ này</div>
                        </div>
                        <div className="menu_navigation-items">
                            <button className="bflogin" href={{}} id="login" onClick={this.onOpenModalLogin}>Đăng nhập</button>
                        </div>
                    </nav>

                </header>

            {/* <!-- signUp End -->
                  <!-- login --> */}

                <Modal open={login} onClose={this.onCloseModalLogin}>

                    <div className="modal-body">
                        <h2>Đăng nhập và <span>bắt đầu</span></h2>
                        <span className="subtitle">Hãy điền vào form này</span>
                        <form
                            onSubmit={e => {
                                this.submitForm(e);
                            }}
                        >
                            <div className="form-group">
                                <input className="form-control" type="text" name="email" id="mail" placeholder="Account" onChange={e => this.changeInputValue(e)} required  />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" id="pass" className="form-control" placeholder="Mật khẩu" onChange={e => this.changeInputValue(e)} required  />
                            </div>
                            <input className="btn btn-primary" id="submit" type="submit" value="Đăng nhập" />
                        </form>

                    </div>
                </Modal>
            </>
        );
    }
    changeInputValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validationFormEmail() {
        let returnDataem = {
            error : false,
            msg: ''
        }

        const {email ,password} = this.state
        //Kiểm tra email
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            returnDataem = {
                error: true,
                msg: 'Không đúng định dạng email'
            }
        }
        return returnDataem;
    }

    validationFormPass(){
        //Kiểm tra password
        let returnDatapa = {
            error : false,
            msg: ''
        }
        const {email, password} = this.state
        const rep =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if(!rep.test(password)) {
            returnDatapa = {
                error: true,
                msg: 'Mật khẩu phải lớn hơn 8 ký tự,có chữ hoa,chữ thường và ký tự đặc biệt'
            }
        }
        return returnDatapa;
    }

    submitForm(e) {
        e.preventDefault();

        //Gọi hàm validationForm() dùng để kiểm tra form
        const validationem = this.validationFormEmail();
        const validationpa = this.validationFormPass();
        //Kiểm tra lỗi của input trong form và hiển thị
        if(validationpa.error || validationem.error){
            alert(validationem.msg+"\n"+validationpa.msg)
        }else{
            alert('Login successfully');
        }
    }
}
export default MenuBeforeLogin;
// const menuBeforeLogin = (props) => (
//     <div>
//         <header className="menu">
//             <nav className="menu_navigation">
//                 <div className="menu_logo">
//                     <a href={{}}><img src={menulogo} /></a>
//                 </div>
//                 <div className="spacer">
//                     <div style={{color:'white'}} align="center">Bạn vui lòng đăng nhập để thực hiện tác vụ này</div>
//                 </div>
//                 <div className="menu_navigation-items">
//                     <a className="bflogin" href={{}}>Đăng nhập</a>
//                 </div>
//             </nav>
//         </header>
//
//     </div>
// );
//
// export default menuBeforeLogin;

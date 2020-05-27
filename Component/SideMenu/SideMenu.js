import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './SideMenu.css';
import { Menu } from 'antd';
import { BarChartOutlined, HomeOutlined, FileDoneOutlined, SwapRightOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;

class SideMenu extends React.Component {
    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: '100%',minWidth: '250', marginTop: '80px' , backgroundColor: 'lightgrey', border: 'none'}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu href={{}} className="subme"
                    key="sub1"

                    title={
                        <a href={{}}><span>
              <HomeOutlined style={{fontSize:'20px', backgroundColor: 'lightgrey'}} className="iconme"/>
              <span className="spanme">Trang chủ</span>
            </span></a>
                    }
                >

                </SubMenu>
                <SubMenu className="subme" key="sub2" icon={<BarChartOutlined style={{fontSize:'20px', backgroundColor: 'lightgrey'}} className="iconme" />} title={<span className="spanme">Thống kê</span>}>
                    <Menu.Item className="itemme" ><a href={{}}><SwapRightOutlined />Tổng số thí sinh</a></Menu.Item>
                    <Menu.Item className="itemme" ><a href={{}}><SwapRightOutlined />Số thí sinh đã thi</a></Menu.Item>
                </SubMenu>
                <SubMenu className="subme"
                    key="sub3"
                    title={
                        <span>
              <FileDoneOutlined style={{fontSize:'20px' , backgroundColor: 'lightgrey'}} className="iconme" />
              <span className="spanme">Kết quả thi</span>
            </span>
                    }
                >
                    <Menu.Item href={{}} className="itemme" ><a href={{}}><SwapRightOutlined />Chi tiết điểm thi</a></Menu.Item>
                    <Menu.Item href={{}} className="itemme" ><a href={{}}><SwapRightOutlined />Bài thi luận</a></Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default SideMenu;
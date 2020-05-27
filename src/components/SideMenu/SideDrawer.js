import React from 'react';

import './SideDrawer.css';
import SideMenu from "./SideMenu";

const sideDrawer = props =>{
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses ='side-drawer open';
    }

    return(
        <nav className={drawerClasses}>
            <SideMenu />
            {/*<ul>*/}
            {/*    <li className="liho">*/}
            {/*        <a className="aho" href={{}}><img href={{}} src={home} />&emsp;Trang chủ</a>*/}
            {/*    </li>*/}
            {/*    <br/>*/}
            {/*    <br/>*/}
            {/*    <br/>*/}
            {/*    <li className="clickli">*/}
            {/*        <li className="liho clickli"><a className="aho clickli" href={{}}><img href={{}} src={thongke} />&emsp;Thống kê</a></li>*/}
            {/*        <ul className="unclick">*/}
            {/*            <li className="lihover">*/}
            {/*                <a className="ahover" href={{}}><img href={{}} src={arrow} />&emsp;Tổng số thí sinh</a>*/}
            {/*            </li>*/}
            {/*            <li className="lihover">*/}
            {/*                <a className="ahover" href={{}}><img href={{}} src={arrow} />&emsp;Số thí sinh đã thi</a>*/}
            {/*            </li>*/}
            {/*        </ul>*/}

            {/*    </li>*/}
            {/*    <br/>*/}
            {/*    <br/>*/}
            {/*    <br/>*/}
            {/*    <li className="clickli">*/}
            {/*        <li className="liho clickli"><a className="aho" href={{}}><img href={{}} src={result} />&emsp;Kết quả thi</a></li>*/}
            {/*        <ul className="unclick">*/}
            {/*            <li className="lihover">*/}
            {/*                <a className="ahover" href={{}}><img href={{}} src={arrow} />&emsp;Chi tiết điểm thi</a>*/}
            {/*            </li>*/}
            {/*            <li className="lihover">*/}
            {/*                <a className="ahover" href={{}}><img href={{}} src={arrow} />&emsp;Bài thi luận</a>*/}
            {/*            </li>*/}
            {/*        </ul>*/}

            {/*    </li>*/}

            {/*</ul>*/}

        </nav>
    );
};

export default sideDrawer;
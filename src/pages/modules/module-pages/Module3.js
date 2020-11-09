import React from 'react'
import '../../../App.css'
import ModuleNavFooter from '../module-components/ModuleNavFooter'
import ModuleNavHeader from '../module-components/ModuleNavHeader'
import './Module.css'

export default function Module3() {
    return (
        <>
        <div className='body'>
            <ModuleNavHeader title='Module 3' prevLink='/module-2' nextLink='/module-3'/>
            <div> 
                <p className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra vitae congue. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Malesuada fames ac turpis egestas. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Purus non enim praesent elementum facilisis. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Nulla aliquet enim tortor at auctor urna nunc id. Dui id ornare arcu odio ut sem nulla pharetra diam. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Eu ultrices vitae auctor eu augue ut lectus. Fringilla ut morbi tincidunt augue interdum velit euismod in. Tortor at risus viverra adipiscing at in tellus integer. 
                <br/>
                <br/>Ipsum suspendisse ultrices gravida dictum. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Fermentum dui faucibus in ornare quam viverra orci. Nec ultrices dui sapien eget mi proin sed libero. Eget gravida cum sociis natoque penatibus et magnis. Quam lacus suspendisse faucibus interdum posuere lorem. Tortor condimentum lacinia quis vel eros donec. Rhoncus dolor purus non enim praesent elementum. Eu non diam phasellus vestibulum lorem sed risus ultricies. Et leo duis ut diam quam. In ante metus dictum at tempor commodo. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Id diam vel quam elementum pulvinar etiam non. Euismod lacinia at quis risus sed. Nec dui nunc mattis enim ut tellus. 
                <br/>
                <br/>Est velit egestas dui id ornare arcu. Consequat mauris nunc congue nisi vitae. Habitant morbi tristique senectus et netus. Venenatis cras sed felis eget velit aliquet sagittis. Pulvinar neque laoreet suspendisse interdum. Volutpat blandit aliquam etiam erat velit scelerisque. Placerat in egestas erat imperdiet sed euismod nisi porta lorem. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Dapibus ultrices in iaculis nunc sed augue. Neque aliquam vestibulum morbi blandit. Sapien et ligula ullamcorper malesuada proin libero nunc. Dui sapien eget mi proin. Adipiscing bibendum est ultricies integer quis auctor elit sed. Id aliquet risus feugiat in ante metus dictum at tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Pretium viverra suspendisse potenti nullam ac tortor vitae. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Aliquam vestibulum morbi blandit cursus risus at. 
                <br/>
                <br/>Egestas congue quisque egestas diam. Scelerisque felis imperdiet proin fermentum. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Consectetur a erat nam at lectus urna. Non consectetur a erat nam at lectus urna. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Porttitor massa id neque aliquam vestibulum morbi. Sapien eget mi proin sed. Odio euismod lacinia at quis risus sed. Diam donec adipiscing tristique risus. 
                </p>
            </div>
            <div className='footer'>
                <ModuleNavFooter currentPageNum='1' totalPageNum='1'/>
            </div>
        </div>
        </>
    )
}

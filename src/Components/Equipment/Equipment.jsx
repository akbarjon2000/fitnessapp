import React from 'react';
import { Container } from './EquipmentStyle';
import { GiStrongMan } from "react-icons/gi"
import { equipObj } from '../../Utils/equipment';


//ICONS:
import { FaUserFriends, FaPlusCircle } from "react-icons/fa"
import { VscLinkExternal } from "react-icons/vsc"
const Equipment = () => {
    return (
        <Container>
            <div className='align__center equipHeader'>
                <div className='align__center'>
                    <GiStrongMan size={35} color="#84818A" />
                    <p className='count'>{0} Equipment</p>
                </div>
                <div className='center addNewMem'>
                    <FaPlusCircle color='#FBFAFC' />
                    <p className='newMem'>New Equipment</p>
                </div>
            </div>
            <div className='align__center categoryHeader'>
                <div className="align__center">
                    <input type="checkbox" className='square' style={{ marginRight: "26px" }} />
                    <p className='category'>Name</p>
                </div>
                <p className='category'>Price</p>
                <p className='category'>Quantity</p>
                <p className='category'>Weight</p>
                <p className='category'>Installed at</p>
                <p className='category'>ACTION</p>
            </div>
            <div style={{ width: "100%" }}>
                {
                    equipObj.map(({ id, name, price, quantity, weight, install, image }) => (
                        <div key={id} className="align__center items" style={{ width: "100%" }}>
                            <div className='align__center text' style={{ width: "210px" }}>
                                <input type="checkbox" className='square' />
                                <img src={image} className="image" />
                                <p className='name'>{name}</p>
                            </div>
                            <p className='price text'>{price}</p>
                            <p className='quantity text'>{quantity}</p>
                            <p className='weight text'>{weight}</p>
                            <p className='install text'>{install}</p>
                            <div className='align__center actionIcon'>
                                <VscLinkExternal color="#20C9AC" />
                            </div>
                        </div>
                    ))
                }
            </div>

        </Container>
    )
};

export default Equipment;

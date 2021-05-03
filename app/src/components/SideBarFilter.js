import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import Select from 'react-select'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { FaGem, FaHeart } from 'react-icons/fa'

function SideBarFilter() {
    const options = [
        { value: '2016', label: '2016' },
        { value: '2017', label: '2017' },
        { value: '2018', label: '2018' }
    ]
    return (
        <div>
            <ProSidebar>
                <Menu iconShape="square">
                    <SubMenu title="Price Range" icon={<FaHeart />}>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Select 
                                className="col-md-5" 
                                options={options} 
                                placeholder='Min' 
                                isSearchable={false}
                                components={{
                                    IndicatorSeparator: () => null
                                }}
                            />
                            to
                            <Select 
                                className="col-md-5" 
                                options={options} 
                                placeholder='Max' 
                                isSearchable={false}
                                components={{
                                    IndicatorSeparator: () => null
                                }}
                            />
                        </div>
                    </SubMenu>
                    <SubMenu title="Year Range" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                    <SubMenu title="Condition" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                    <SubMenu title="Make" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                    <SubMenu title="Model" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                    <SubMenu title="Mileage Range" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        </div>
    )
}

export default SideBarFilter
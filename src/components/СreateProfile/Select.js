import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { default as ReactSelect } from "react-select";
import "../../css/css.js"
import { components } from "react-select";
import { Button } from "react-bootstrap";


const data = [{label: "букмекер1", value: "букмекер1"}, 
    {label: "букмекер2", value: "букмекер2"},
    {label: "букмекер3", value: "букмекер3"},
    {label: "букмекер4", value: "букмекер4"}, 
    {label: "букмекер5", value: "букмекер5"}, 
    {label: "букмекер6", value: "букмекер6"}, 
    {label: "букмекер7", value: "букмекер7"}, 
    {label: "букмекер8", value: "букмекер8"}, 
    {label: "букмекер9", value: "букмекер9"}, 
    {label: "букмекер10", value: "букмекер10"}]

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
      <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
     
    </div>
  );
};

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: null
    };
  }

  handleChange = (selected) => {
    this.setState({
      optionSelected: selected
    });
    console.log(selected)
    return selected
  };

  render() {
    return (
      <>
      <h4>ШАГ 2 из 7 - Выберите необходимые БК</h4><br/>
      <h6>рекомендуем выбирать не более 2-3 активных букмекеров</h6><br/> 
      <span
        class="d-inline-block"
        id="f"
        data-toggle="popover"
        data-trigger="focus"
        data-content="Please selecet account(s)"
      >
        <ReactSelect
          options={data}
          isMulti
          id="f"
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option
          }}
          onChange={this.handleChange}
          allowSelectAll={true}
          value={this.state.optionSelected}
        />
        <Button className='btn_middle' size="lg" href="/three_step">Далее</Button>
        <Button className='btn_middle' size="lg" href="/create_profil">Назад</Button>
      </span>
      </>
    );
  }
}


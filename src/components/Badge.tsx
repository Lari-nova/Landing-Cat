import React from "react";
import styled from "styled-components";

interface Props {
	circleText: string,
	badgeColor: string,
	badgeHoverColor: string,
}

const Badge = ({ circleText , badgeColor, badgeHoverColor}: Props) => (
	<Circle className={"Circle"} badgeColor={badgeColor}>
		<CircleText>{circleText}</CircleText>
		<CircleSubText>кг</CircleSubText>
	</Circle>
);

const Circle = styled.div<{badgeColor: string}>`
	width: 80px;
	height: 80px;
	text-align: center;
	background-color: ${props => props.badgeColor};
	color: white;
	-moz-border-radius: 50px;
	-webkit-border-radius: 50px;
	border-radius: 50px;
	overflow: hidden;
	@media (max-width: 340px) { 
  	height: 70px;
 		width: 70px;
 		bottom: 50px;
  	right: 80px;
  }
`;

const CircleText = styled.h1`
	font-size: 42px;
	line-height: 10%;
	text-align: center;
	font-family: "Trebuchet MS";
		@media (max-width: 340px) { 
  		font-size: 38px;
  }
`;

const CircleSubText = styled.h1`
	font-size: 21px;
	line-height: 0;
	font-family: "Trebuchet MS";
	text-align: center;
		@media (max-width: 340px) { 
  		font-size: 17px;
  }
`;

export default Badge;

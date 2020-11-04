import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import cat from "../assets/images/cat.png";
import Badge from '../components/Badge';

export type CardState = "unselected" | "selected" | "disable";

export interface Props {
	text: string,
	title: string,
	subTitle: string,
	badgeText: string,
	disabled?: boolean,
	paragraph: string[],
	selectedText?: string,
	onClick?: (state: CardState) => void,
	bottomText: { selected: string, disabled: string }
}

const SELECTED = 0;
const UNSELECTED = 1;
const DISABLED = 2;

type ColorCard = { default: string, hover: string }

const ColorsCard: ColorCard[] = [
	{ default: '#d91667', hover: '#e62e7a'},
	{ default: '#1698d9', hover: '#2ea8e6'},
	{ default: '#b3b3b3', hover: ''}
];

const Card = ({
	              selectedText,
	              bottomText,
	              badgeText,
	              paragraph,
	              disabled,
	              subTitle,
	              onClick,
	              title,
	              text
              }: Props) => {
	const [stateCard, setStateCard] = useState<CardState>(disabled ? "disable" : "unselected");
	const [colorCard, setColorCard] = useState<ColorCard>(ColorsCard[UNSELECTED]);

	useEffect(() => {
		switch (stateCard) {
			case "disable":
				setColorCard(ColorsCard[DISABLED]);
				break;
			case "selected":
				setColorCard(ColorsCard[SELECTED]);
				break;
			case "unselected":
				setColorCard(ColorsCard[UNSELECTED]);
				break;
			default:
				setColorCard(ColorsCard[UNSELECTED]);
		}
	}, [stateCard]);

	const onCardClick = () => {
		if (stateCard !== "disable") {
			onClick && onClick(stateCard);
		}
		switch (stateCard) {
			case "disable":
				break;
			case "selected":
				setStateCard("unselected");
				break;
			case "unselected":
				setStateCard("selected");
				break;
			default:
				break;
		}
	};

	const renderBottomText = () => {
		if (stateCard === 'selected') {
			return <p key={'selected'}>{bottomText.selected}</p>
		}
		if (stateCard === 'disable') {
			return <p style={{ color:'#ffff66' }} key={'disable'}>{bottomText.disabled}</p>
		}
		return (
			<p key={'default'}>
				Чего сидишь? Порадуй котэ, <Link onClick={onCardClick}>купи.</Link>
			</p>
		)
	};

	return(
		<CardContainer>
			<CardStyle
				cardColor={colorCard.default}
				onClick={onCardClick}
				cardHoverColor={colorCard.hover}
				cardState={stateCard}
			>
				<InnerContainer className={"disabledCard"}>
					<Background>
						<Container>
							<Text className={"text"}>{text}</Text>
							<Text2 className={"selectedText"}>{selectedText}</Text2>
							<Title>{title}</Title>
							<SubTitle>
								{subTitle}
							</SubTitle>
							{paragraph.map((p) => (
								<SubText key={p}>
									{p}
								</SubText>
							))}
						</Container>
						<Wrapper>
							<Badge
								circleText={badgeText}
								badgeColor={colorCard.default}
								badgeHoverColor={colorCard.hover} />
						</Wrapper>
					</Background>
				</InnerContainer>
			</CardStyle>
			<BottomText>
				{renderBottomText()}
			</BottomText>
		</CardContainer>
	)
};

const CardStyle = styled.div<{ cardColor: string, cardHoverColor: string, cardState: CardState }>`
  height: 480px;
 	width: 320px;
  padding: 3px;
  background: linear-gradient(135deg, transparent 30px, ${props => props.cardColor} 0);
  border-radius: 5px;
  &:hover {
  	background: linear-gradient(135deg, transparent 30px, ${props => props.cardHoverColor} 0);
  	.Circle {
  		background: ${props => props.cardHoverColor};
  	}
  	${props => props.cardState === 'selected' && css`.text { display: none }; .selectedText { display: block };`};
  }
	${props => props.cardState === 'disable' && css`.disabledCard {opacity: 0.45}`};
  @media (max-width: 1100px) { 
  	margin: 5px;
  }
  @media (max-width: 340px) { 
  	height: 460px;
 		width: 300px;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, transparent 29px, white 0);
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

const Wrapper = styled.div`
	position: absolute;
	bottom: 16px;
	right: 16px;
`;

const Background = styled.div`
	width: 100%;
	height: 100%;
	background: url(${cat}) no-repeat center 190px;
`;

const Container = styled.div`
	padding-left: 50px;
`;

const Text = styled.p`
	font-size: 16px;
	color: #666666;
	padding-top: 6px;
	line-height: 80%;
	font-family: "Trebuchet MS";
`;

const Text2 = styled.p`
	font-size: 16px;
	color: #e62e7a;
	padding-top: 6px;
	line-height: 80%;
	font-family: "Trebuchet MS";
	display: none;
`;

const Title = styled.h1`
	color: black;
	font-size: 48px;
	line-height: 10%;
	z-index: 5;
	font-family: "Trebuchet MS";
`;

const SubTitle = styled.h3`
	color: black;
	font-size: 24px;
	font-family: "Trebuchet MS";
	line-height: 40%;
	padding-bottom: 8px;
`;

const SubText = styled.p`
	font-size: 14px;
	color: #666666;
	line-height: 0;
	font-family: "Trebuchet MS";
`;

const CardContainer = styled.div`
padding: 15px;
`;

const Link = styled.a`
	color:#1698d9;
	border-bottom: dashed 1px #1698d9;
	cursor: pointer;
	&:hover {
		color: #2ea8e6;
	}
`;

const BottomText = styled.div`
	text-align: center;
	font-size: 13px;
	font-family: "Trebuchet MS";
`;

export default Card;

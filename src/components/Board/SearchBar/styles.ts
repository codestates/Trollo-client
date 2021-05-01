import styled from '@emotion/styled';

export const SearchBarWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 800px;
	height: 48px;
	margin: 0 auto;
	position: relative;
	top: 150px;
`;

export const Upload = styled.button`
	width: 100px;
	height: 32px;
	text-align: center;
	color: #fff;
	border-radius: 5px;
	border: none;
	background: #0065ff;
	font-weight: 500;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
`;

export const SearchSelectBox = styled.div`
	display: flex;
	justify-content: center;
	height: 32px;
	margin-left: 30px;
`;

export const Select = styled.select`
	background-color: #fff;
	border-radius: 5px;
	outline: none;
	border: 0.4px solid #b2c0cc;
	font-size: 12px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
`;

export const Option = styled.option``;

export const SearchForm = styled.form``;

export const SearchLabel = styled.div``;

export const SearchInput = styled.input`
	width: 480px;
	height: 32px;
	border-radius: 5px;
	border: 0.4px solid #b2c0cc;
	padding: 12px;
	margin-left: 10px;
	margin-bottom: 2px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	&:focus {
		border: 2px solid #0065ff;
	}
`;

export const SearchButton = styled.button`
	width: 20px;
	height: 32px;
	background-color: transparent;
	position: relative;
	top: 4px;
	right: 24px;
	color: #b2c0cc;
	font-size: 18px;
`;

import React from "react";
import styled from "styled-components";

const InfoWrapper = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
`;

const Info = ({ completed, total }) => {
  return (
    <InfoWrapper>
      <p>Завершено задач: {completed} / {total}</p>
    </InfoWrapper>
  );
};

export default Info;

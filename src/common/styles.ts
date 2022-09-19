import styled from '@emotion/styled';

export const FlexBox = styled.div`
  display: flex;
`;
export const FlexBoxBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FlexBoxEvenly = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const FlexBoxAround = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const FlexBoxCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FlexBoxLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const FlexBoxRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const SideContent = styled(FlexBoxLeft)`
  grid-gap: 5px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 2px;
`;
export const SideContentHorizontal = styled(FlexBoxLeft)`
  grid-gap: 5px;
  width: 100%;
  height: 50%;
  justify-content: center;
`;
export const SideContentVertical = styled(FlexBoxLeft)`
  grid-gap: 5px;
  width: 50%;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

export const TextLeft = styled.div`
  font-size: 12px;
  color: #ffffff;
  align-items: flex-start;
`;

export const TextCenter = styled.div`
  font-size: 12px;
  color: #ffffff;
  align-items: center;
`;

export const TextRight = styled.div`
  font-size: 12px;
  color: #ffffff;
  align-items: flex-end;
`;

export const Span = styled.span`
  font-size: 12px;
  color: #ffffff;
  text-align: start;
`;

export const SpanCenter = styled.span`
  font-size: 12px;
  color: #ffffff;
  text-align: center;
`;

export const SpanRight = styled.span`
  font-size: 12px;
  color: #ffffff;
  text-align: end;
`;
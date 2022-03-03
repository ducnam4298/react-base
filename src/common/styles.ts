import styled from '@emotion/styled';
import { appStore } from 'layouts/appStore';

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

export const FlexBoxCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tab = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: ${appStore.isLightMode ? '#999999' : '#ffffff4d'};
  cursor: pointer;
  margin-left: 10px;
  border: ${appStore.isLightMode ? '1px solid #C6CCD7' : '1px solid #333333'};
  box-sizing: border-box;
  border-radius: 5px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
`;

export const TabActive = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-left: 10px;
  cursor: pointer;
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  background: ${appStore.isLightMode ? '#EF4B4B' : '#ef4b4b33'};
  color: white;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  background: #434853;
  width: 100%;
  color: #ffffff;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 5px;
  position: relative;
`;

export const Content = styled.div`
  background: #292b30;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  margin: 10px
  left: 0px;
  top: 37px;
  border-radius: 5px;
`;

export const Th = styled.div<any>`
  background: ${props => (props.header ? '#6a738680 ' : '#6a738633')};
  height: ${props => props.height ?? 45}px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${props => (props.header ? '#999999' : '#ffffff')};
  font-size: 12px;
  flex: ${props => props.flex || 1};
  margin-bottom: 1px;
`;

export const ThC = styled.div<any>`
  background: ${props => (props.header ? '#6a738680 ' : '#6a738633')};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => (props.header ? '#999999' : '#ffffff')};
  font-size: 12px;
  flex: 1;
`;

export const ThType2 = styled.div<any>`
  display: flex;
  flex-direction: column;
  grid-gap: 1px;
  height: ${props => props.height ?? 45}px;
  flex: ${props => props.flex || 1};
`;

export const Box = styled.div<any>`
  display: flex;
  grid-gap: 1px;
  flex: ${props => props.flex || 1};
`;

import styled, { keyframes } from "styled-components";

type ToastPlaceholderProps = {
  type: ToastType;
};

const getColorType = (type: ToastType): string => {
  if (type === "WARNING") return "#898900";
  if (type === "ERROR") return "#9a0000";
  return "#7782a3";
};

export const ToastPlaceholder = styled.div<ToastPlaceholderProps>`
  background-color: ${({ type }) => getColorType(type)};
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

export const ToastCore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  gap: 1rem;
`;

export const ToastButton = styled.input`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 0.25rem 0.5rem;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    cursor: pointer;
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
`;

type ProgressBarProps = {
  $timeOut: number;
};

const progressBar = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%
  }
`;

export const ToastProgressBar = styled.div<ProgressBarProps>`
  background-color: rgba(255, 255, 255, 0.5);
  height: 2px;
  width: 0%;
  animation: ${progressBar} ${({ $timeOut }) => $timeOut}ms linear;
`;

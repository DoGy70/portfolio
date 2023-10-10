import { TbShieldFilled, TbShieldHalfFilled, TbShield } from "react-icons/tb";
import { styled } from "styled-components";

const Rating = ({ rating }) => {
  const tempRating = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <TbShieldFilled />
        ) : rating >= number ? (
          <TbShieldHalfFilled />
        ) : (
          <TbShield />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div>{tempRating}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 0.55rem;
  display: flex;
  align-items: center;
  span {
    padding-top: 0.85rem;
    svg {
      color: var(--primary-500);
      align-self: center;
    }
  }
`;

export default Rating;

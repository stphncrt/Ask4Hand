import React, { useEffect, useContext } from "react";
import AppContext from "../../context/AppContext";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TitleCheckBox from "../../components/TitleCheckBox";

function SearchPage() {
  const params = useParams();
  const { occupationId } = params;
  const { workerList, getWorkerByTitle, isLoading } = useContext(AppContext);
  useEffect(() => {
    getWorkerByTitle(`/search/${occupationId}`);
  }, []);

  return (
    <StyledWrapper>
      <TitleCheckBox occupationId={occupationId} />
      <div>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          workerList?.map((worker) => (
            <p key={worker._id}>{worker.firstName}</p>
          ))
        )}
      </div>
    </StyledWrapper>
  );
}

export default SearchPage;
export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3rem;
`;

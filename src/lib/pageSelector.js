
export const pageSelector=(actualPage, setActualPage )=>{

    const nextPage = () => {
        if (actualPage >= 1 && actualPage <= length) {
          setActualPage(actualPage + 1);
        }
        if (actualPage < 1) {
          setActualPage(1);
        }
      };
      const prevPage = () => {
        if (actualPage > 1 && actualPage <= length) {
          setActualPage(actualPage - 1);
        }
        if (actualPage < 1) {
          setActualPage(1);
        }
      };

      return {nextPage, prevPage}


};
// MCFR-0683
import CollectionStatusForClassUI from './CollectionStatusForClass.render';
import classes from './CollectionStatusForClass.module.scss';

const CollectionStatusForClass = () => {
     const customRowRender = (key: string, row: any) => {
        switch (key) {
          case 'code6':
            return (
              <div className={classes['column-sixth']}>
                <div>{row.code4}</div>
                <div>{row.code5}</div>
              </div>
            );
        }
      };
  return (
    <div>
      <CollectionStatusForClassUI customRowRender={customRowRender} />
    </div>
  )
}

export default CollectionStatusForClass;

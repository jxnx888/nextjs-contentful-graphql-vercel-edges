import styles from './index.module.scss'
import _ from 'lodash'

interface IProps {
  [PropsName: string]: any
}

const Index = (props: IProps) => {
  const {content} = props
  return (
    <div className={styles.container}>
      {
        !_.isEmpty(content) && (
          <>
            <div className={styles.campus} style={{backgroundImage: `url(${content?.image})`}}>
              <h1 className={styles.title}>{content?.name}</h1>
              <div className={styles.logos}>
                {
                  !_.isEmpty(content?.logo) && _.map(content?.logo, (item, index) => {
                    return <div key={index} className={styles.each_logo}><a href={item.link}>
                      <img src={item.img} alt=""/>
                    </a></div>
                  })
                }
              </div>
            </div>

          </>
        )

      }
    </div>
  );
}
export default Index
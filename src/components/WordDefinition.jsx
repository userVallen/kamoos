import styles from "./WordDefinition.module.css";

function WordDefinition({ content }) {
  console.log(content);
  const word = content.word;
  const meanings = content.meanings;
  const phonetic =
    content.phonetics[0]?.text !== undefined
      ? content.phonetics[0]?.text
      : null;
  console.log("this is meanings");
  console.log(meanings);

  return (
    <div className={styles.defContainer}>
      <div className={styles.wordWrapper}>
        {word}
        {phonetic && <span className={styles.phoneticWrapper}>{phonetic}</span>}
      </div>
      {meanings.map((entry) => {
        console.log("entry is");
        console.log(entry);
        return (
          <div className={styles.entryContainer}>
            <div className={styles.posWrapper}>{entry.partOfSpeech}</div>
            {entry.definitions.map((def, index) => {
              return (
                <div className={styles.defWrapper}>
                  <sup>
                    <i>{`${index + 1} `}</i>
                  </sup>
                  {def.definition}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default WordDefinition;

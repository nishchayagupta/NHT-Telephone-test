// This function returns a button component according to the num argument passed to it. This button would be titled
// same as the argument passed and would also work as a button (i.e. append the value clicked to the top text section)
export const returnButton = num => {
  return (
    <TouchableOpacity
      onPress={() => {
        this.appendState(num);
      }}
      style={styles.ButtonStyle}
    >
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>
        {num}
      </Text>
    </TouchableOpacity>
  );
};

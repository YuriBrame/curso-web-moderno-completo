<template>
  <div class="calculator">
    <AllDisplay :value="displayValue" />
    <AllButton label="AC" triple @onClick="clearMemory"/>
    <AllButton label="/" operation @onClick="setOperation"/>
    <AllButton label="7" @onClick="addDigit"/>
    <AllButton label="8" @onClick="addDigit"/>
    <AllButton label="9" @onClick="addDigit"/>
    <AllButton label="*" operation @onClick="setOperation"/>
    <AllButton label="4" @onClick="addDigit"/>
    <AllButton label="5" @onClick="addDigit"/>
    <AllButton label="6" @onClick="addDigit"/>
    <AllButton label="-" operation @onClick="setOperation"/>
    <AllButton label="1" @onClick="addDigit"/>
    <AllButton label="2" @onClick="addDigit"/>
    <AllButton label="3" @onClick="addDigit"/>
    <AllButton label="+" operation @onClick="setOperation"/>
    <AllButton label="0" double @onClick="addDigit"/>
    <AllButton label="." @onClick="addDigit"/>
    <AllButton label="=" operation @onClick="setOperation"/>
  </div>
</template>

<script>
import AllDisplay from '../components/AllDisplay.vue'
import AllButton from '../components/AllButton.vue'

export default {
  data: function() {
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0
    }
  },
  components: { AllButton, AllDisplay },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data())
    },
    setOperation(operation) {
      if (this.current === 0) {
        this.operation = operation
        this.current = 1
        this.clearDisplay = true
      } else {
        const equals = operation === "="
        const curretOperation = this.operation

        try {
          this.values[0] = eval(
            `${this.values[0]} ${curretOperation} ${this.values[1]}`)
            if (isNaN(this.values[0]) || !isFinite(this.values[0])) {
              this.clearMemory()
              return
            }
        } catch (e) {
          this.$emit('onError', e)
        }

        this.values[1] = 0

        this.displayValue = this.values[0]
        this.operation = equals ? null : operation
        this.current = equals ? 0 : 1
        this.clearDisplay = !equals
      }
    },
    addDigit(n) {
      if (n === "." && this.displayValue.includes(".")) {
        return
      }

      const clearDisplay = this.displayValue === "0"
        || this.clearDisplay
      const currentValue = clearDisplay ? "" : this.displayValue
      const displayValue = currentValue + n

      this.displayValue = displayValue
      this.clearDisplay = false

      // Altenativa 1
      this.values[this.current] = displayValue

      // Alternativa 2
      // if (n !== ".") {
      //   const i = this.current
      //   const newValue = parseFloat(displayValue)
      //   this.values[1] = newValue
      // }
    }
  }
}
</script>

<style>
  .calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
  }
</style>
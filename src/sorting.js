export default class Sorting {
  bubble(array) {
    for (let indexLeft = 0; indexLeft < array.length; indexLeft++) {
      let left = array[indexLeft];
      for (let indexRight = 0; indexRight < array.length; indexRight++) {
        if (left < array[indexRight]) {
          array[indexLeft] = array[indexRight];
          array[indexRight] = left;
          left = array[indexLeft];
        }
      }
    }
  }

  selectionSort(array) {
    for (let smallerIndex = 0; smallerIndex < array.length; smallerIndex++) {
      let smaller = array[smallerIndex];
      for (let index = 0; index < array.length; index++) {
        if (array[index] > smaller) {
          let temp = array[index];
          array[index] = smaller;
          smaller = temp;
        }
      }
      array[smallerIndex] = smaller;
    }
  }

  insertSort(array) {
    for (let index = 0; index < array.length; index++) {
      let currentyIndex = index;
      while (array[currentyIndex] < array[currentyIndex - 1]) {
        let temp = array[currentyIndex - 1];
        array[currentyIndex - 1] = array[currentyIndex];
        array[currentyIndex] = temp;
        currentyIndex--;
      }
    }
  }

  mergeSort(array) {
    for (let index = 0; index < array.length; index++) {
      let [elementindex] = array[index];
      console.log(elementindex)
    }
  }

  quickSort() {}

  randomQuickSort() {}

  countingSort() {}

  radixSort() {}
}

export class Sorting {
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

  mergeSort(array, start = 0, end = null) {
    if (end === null) end = array.length;

    if (end - start > 1) {
      let middle = Math.floor((end + start) / 2);
      this.mergeSort(array, start, middle);
      this.mergeSort(array, middle, end);
      this._merge(array, start, middle, end);
    }
  }

  _merge(array, start, middle, end) {
    let leftArray = array.slice(start, middle);
    let rightArray = array.slice(middle, end);
    let topRight = 0;
    let topLeft = 0;

    for (let index = start; index < end; index++) {
      if (topLeft >= leftArray.length) {
        array[index] = rightArray[topRight];
        topRight++;
      } else if (topRight >= rightArray.length) {
        array[index] = leftArray[topLeft];
        topLeft++;
      } else if (leftArray[topLeft] < rightArray[topRight]) {
        array[index] = leftArray[topLeft];
        topLeft++;
      } else {
        array[index] = rightArray[topRight];
        topRight++;
      }
    }
  }

  quickSort() {}

  randomQuickSort() {}

  countingSort() {}

  radixSort() {}
}

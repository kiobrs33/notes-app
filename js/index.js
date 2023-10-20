// EXPORTAR EN PDF

//Validar la sumas de porcentajes al 100%
//Agregar caritas o sms "Aprobado" "Desaprobado" "Felicitaciones"

class Course {
  constructor(nameCourse, units, minNote, maxNote) {
    this.nameCourse = nameCourse;
    this.units = units;
    this.minNote = minNote;
    this.maxNote = maxNote;
  }

  createCourseNoteElementHtml(numUnit) {
    const divNote = `
    <div class="note">
      <div>
        <label for="">Unidad ${numUnit}</label>
      </div>
      <div>
        <label for="">Examen Teorico</label>
        <div class="note__camp">
          <input type="number" placeholder="Porcentaje" />
          <input type="number" placeholder="Nota Teorica" />
        </div>
      </div>
      <div>
        <label for="">Evaluacion Continua</label>
        <div class="note__camp">
          <input type="number" placeholder="Porcentaje" />
          <input type="number" placeholder="Nota Continua" />
        </div>
      </div>
      <div>
        <label for="">Porcentaje: 30%</label>
      </div>
    </div>
    `;

    return divNote;
  }

  createCourseElement() {
    let notes = "";

    for (let i = 1; i <= this.units; i++) {
      const noteObject = this.createCourseNoteElementHtml(i);
      notes += noteObject;
    }

    let divCourse = `
    <div class="course">
      <h3>${this.nameCourse}</h3>
      <div class="course__notes">${notes}</div>
      <div class="course__footer">
        <div>
          <label for="">Nota promedio</label>
          <input type="text" value="0"/>
        </div>
        <div>
          <label for="">Puntos para aprobar</label>
          <input type="text" value="0"/>
        </div>
        <div>
          <label for="">Aprobado</label>
        </div>
        <div>
          <label for="">Porcentaje Total</label>
          <input type="text" />
        </div>
      </div>
    </div>
    `;

    return divCourse;
  }
}

const generateNotes = (quantity) => {};

const course = new Course("Matematica", 5, 10.5, 20);

console.log(course.createCourseElement());

const courses = document.querySelector(".courses");
// courses.innerHTML = course.createCourseElement();

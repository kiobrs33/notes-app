// EXPORTAR EN PDF

//Validar la sumas de porcentajes al 100%
//Agregar caritas o sms "Aprobado" "Desaprobado" "Felicitaciones"

// Forma de crear inputs DINAMICOS
// Con Create Element
// Con Clone Node Element
// Con Inner Html y Bactick

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
          <input type="number" placeholder="Porcentaje" name="porcentaje_nota_teorica" />
          <input type="number" placeholder="Nota Teorica" name="nota_teorica" />
        </div>
      </div>
      <div>
        <label for="">Evaluacion Continua</label>
        <div class="note__camp">
          <input type="number" placeholder="Porcentaje" name="porcentaje_nota_continua" />
          <input type="number" placeholder="Nota Continua" name="nota_continua" />
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
      <div>
        <div>
          <label for="">Curso: <b>${this.nameCourse}</b></label>
        </div>
        <div>
          <label for="">Cantidad de Unidades: <b>${this.units}</b></label>
        </div>
        <div>
          <label for="">Nota Mínima: <b>${this.minNote}</b></label>
        </div>
        <div>
          <label for="">Nota Máxima: <b>${this.maxNote}</b></label>
        </div>
      </div>
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

const formCourse = document.querySelector("#form-course");
formCourse.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const course = new Course(
    data.name,
    data.units,
    data.note_min,
    data.note_max
  );

  const courses = document.querySelector(".courses");
  courses.innerHTML = course.createCourseElement();
});



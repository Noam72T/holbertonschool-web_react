namespace Subjects {
  export class Subject {
    teacher!: Teacher; // ← Ajoute "!" ici

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
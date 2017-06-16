import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';
import { PROBLEMS } from '../mock-problems';

@Injectable()
export class DataService {
  problems: Problem[] = PROBLEMS;
  constructor() { }


  getProblems(): Problem[] {
    //return PROBLEMS;
    return this.problems;
  }

  getProblem(id: number): Problem {
    //return PROBLEMS.find((problem) => problem.id === id);
    return this.problems.find((problem) => problem.id === id);
  }


 addProblem(newProblem: Problem) {
    newProblem.id = this.problems.length + 1;
    this.problems.push(newProblem);
  }
}


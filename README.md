# Mysterious-Organism-Project

Mysterious Organism Project
Description
The "Mysterious Organism" project is a simulation that mimics DNA sequences of an organism named Pila aequor (P. aequor) found near hydrothermal vents in the ocean. The project was undertaken to study the organism's unique DNA structure, high mutation rate due to hydrothermal vents, and its survival characteristics. The simulation involves creating instances of P. aequor and employing methods to analyze, compare, and manipulate DNA sequences.

Features
Factory Function: The project employs a factory function, pArquorFactory(), which generates instances of P. aequor. These instances encapsulate properties like specimenNum and dna.

Mutation Simulation: The .mutate() method allows the simulation of mutation in P. aequor's DNA. It randomly selects a base and changes it to another base, emulating natural DNA mutation.

DNA Comparison: The .compareDNA() method calculates the percentage of DNA similarity between two instances of P. aequor, aiding in understanding genetic relationships.

Survival Probability: The .willLikelySurvive() method assesses the probability of survival by checking if the DNA contains at least 60% 'C' or 'G' bases.

Complementary Strand Generation: The .complementStrand() method generates the complementary DNA strand by pairing 'A's with 'T's and 'C's with 'G's.

Multiple Instances: The project creates an array of 30 instances of P. aequor that are likely to survive, based on their DNA composition.

How to Use
Install the required software packages.

Clone the repository and navigate to the project directory.

Open the terminal and execute the JavaScript file.

Observe the outputs, including mutation simulation, DNA comparison results, survival assessments, and complementary strand generation.

Technologies
JavaScript
Node.js (for execution)
Terminal (for interaction)
Collaborators
Your GitHub Username
License
This project is licensed under the MIT License.

Project Goals
The project aims to simulate the unique characteristics of Pila aequor's DNA and its survival traits. By creating instances of P. aequor and employing various methods, the simulation helps researchers study DNA mutation, similarity, and survival probabilities of the organism. Through this project, valuable insights into genetics, mutation, and survival strategies are gained.

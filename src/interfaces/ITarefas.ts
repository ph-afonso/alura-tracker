import iProjeto from "./iProjetos";

export default interface ITarefa {
    duracaoEmSegundos: number,
    descricao: string,
    projeto: iProjeto
}
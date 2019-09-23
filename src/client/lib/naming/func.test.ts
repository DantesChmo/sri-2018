import {bem} from './func';
const assert = require('assert');

enum Results {
  BLOCK = 'Logo', //блок
  ELEM = 'Header-Logo', //элемент
  BLOCKMODSTR = 'Logo_color_white', //модификатор блока(значение-строка)
  BLOCKMODTRUE = 'Logo_active', //модификатор блока(значение-true)
  ELEMMODSTR = 'Header-Logo_size_big', //модификатор элемента(значение-строка)
  ELEMMODTRUE ='Header-Logo_active', //модификатор элемента(значение-true)
}

enum Params{
  BLOCK = 'loGo',
  ELEM = 'heAdEr',
}

describe('Тесты функции bem', () => {
    describe('Входные данные', () => {
        describe('1 параметр(Блок)', () => {
            it('Буквы в разном регистре', () => {
                assert.equal(bem(Params.BLOCK), Results.BLOCK);
                assert.equal(bem(Params.BLOCK), Results.BLOCK);
            });
        });
        describe('2 параметра(блок, элемент)', () => {
            it('Последовательность классов', () => {
                assert.equal(bem(Params.BLOCK, Params.ELEM), `${Results.BLOCK} ${Results.ELEM}`);
            });
        });

        describe('3 параметра(блок, элемент, модификатор)', () => {
            describe('Модификатор без указания на блок/элемент', () => {
                it('Значение свойства модификатора-строка', () => {
                    assert.equal(bem(Params.BLOCK, Params.ELEM, {coLor: 'white'}), `${Results.BLOCK} ${Results.ELEM} ${Results.BLOCKMODSTR}`);
                });
                it('Значение свойства модификатора - булевое значение', () => {
                    assert.equal(bem(Params.BLOCK, Params.ELEM, {active: true}), `${Results.BLOCK} ${Results.ELEM} ${Results.BLOCKMODTRUE}`);
                    assert.equal(bem(Params.BLOCK, Params.ELEM, {active: false}), `${Results.BLOCK} ${Results.ELEM} Logo_active_false`);
                });
                it('Модификатор имеет несколько свойств', () => {
                    assert.equal(bem(Params.BLOCK, Params.ELEM, {active: true, color: 'white'}),
                        `${Results.BLOCK} ${Results.ELEM} ${Results.BLOCKMODTRUE} ${Results.BLOCKMODSTR}`);
                });
                it('Модификатор отсутствует', () => {
                    assert.equal(bem(Params.BLOCK, Params.ELEM), `${Results.BLOCK} ${Results.ELEM}`);
                });
            });
            describe('Модификатор с указание на блок/элемент', () => {
                it('Значение ключа свойсва модификатора - блок', () => {
                    assert.equal(bem(Params.BLOCK, Params.ELEM, {logo: {color: 'white'}}),
                        `${Results.BLOCK} ${Results.ELEM} ${Results.BLOCKMODSTR}`);
                });
                it('Значение ключа свойсва модификатора - элемент', () => {
                    assert.equal(bem(Params.BLOCK, Params.ELEM, {Header: {size: 'big'}}),
                        `${Results.BLOCK} ${Results.ELEM} ${Results.ELEMMODSTR}`);
                });
                describe('Модификатор имеет несколько свойств', () => {
                    it('Ключи свойства - объект и элемент ', () => {
                        assert.equal(bem(Params.BLOCK, Params.ELEM, {Header: {size: 'big'}, logo: {active: true}}),
                            `${Results.BLOCK} ${Results.ELEM} ${Results.BLOCKMODTRUE} ${Results.ELEMMODSTR}`);
                    });
                    it('Последовательность классов', () => {
                        assert.equal(bem(Params.BLOCK, Params.ELEM, {Header: {size: 'big'}, logo: {active: true}}),
                            `${Results.BLOCK} ${Results.ELEM} ${Results.BLOCKMODTRUE} ${Results.ELEMMODSTR}`);
                        assert.equal(bem(Params.BLOCK, Params.ELEM, {Logo: {color: 'white'}, Header: {size: 'big'}}),
                            `${Results.BLOCK} ${Results.ELEM} ${Results.BLOCKMODSTR} ${Results.ELEMMODSTR}`);
                    });
                    it('Ключи свойства - несколько объектов ', () => {
                        assert.equal(bem(Params.BLOCK, Params.ELEM, {loGO: {color: 'white'}, logo: {active: true}}),
                            `${Results.BLOCK} ${Results.ELEM} ${Results.BLOCKMODSTR} ${Results.BLOCKMODTRUE}`);
                    });
                    it('Ключи свойства - несколько элементов и объект ', () => {
                        assert.equal(bem(Params.BLOCK, Params.ELEM, {header: {size: 'big'}, logo: {active: true}, heaDer: {active: true, size: 'big'}}),
                            `${Results.BLOCK} ${Results.ELEM} ${Results.BLOCKMODTRUE} ${Results.ELEMMODSTR} ${Results.ELEMMODTRUE}`);
                    });
                });
            });
        });
    });
});

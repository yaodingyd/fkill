import {expectType} from 'tsd-check';
import fkill from '.';

expectType<Promise<void>>(fkill(1337));
expectType<Promise<void>>(fkill('Safari'));
expectType<Promise<void>>(fkill([1337, 'Safari', ':8080']));
expectType<Promise<void>>(fkill(1337, {force: true}));
expectType<Promise<void>>(fkill(1337, {tree: false}));
expectType<Promise<void>>(fkill(1337, {ignoreCase: true}));

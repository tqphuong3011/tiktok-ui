import classNames from 'classnames/bind';
import AccountItem from '~/components/AccountItem';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';
import * as searchServices from '~/services/searchService';
const cx = classNames.bind(styles);

function Search() {
     const [searchValue, setSearchValue] = useState('');
     const [searchResult, setSearchResult] = useState([]);
     const [showResult, setShowResult] = useState(true);
     const [loading, setLoading] = useState(false);
     const inputRef = useRef();

     const debouncedValue = useDebounce(searchValue, 500);

     useEffect(() => {
          if (!debouncedValue.trim()) {
               setSearchResult([]);
               return;
          }

          const fetchApi = async () => {
               setLoading(true);
               const result = await searchServices.search(debouncedValue);
               setSearchResult(result);
               setLoading(false);
          };

          fetchApi();
     }, [debouncedValue]);

     const handleClear = () => {
          setSearchValue('');
          setSearchResult([]);
          inputRef.current.focus();
     };

     const handleHideResult = () => {
          setShowResult(false);
     };

     const handleChange = (e) => {
          const vl = e.target.value;
          if (!vl.startsWith(' ')) {
               setSearchValue(e.target.value);
          }
     };

     return (
          <div>
               <HeadlessTippy
                    interactive
                    visible={showResult && searchResult.length > 0}
                    render={(attrs) => (
                         <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                              <PopperWrapper>
                                   <h4 className={cx('search-title')}>Account</h4>
                                   {searchResult.map((result) => (
                                        <AccountItem key={result.id} data={result} />
                                   ))}
                                   <AccountItem />
                              </PopperWrapper>
                         </div>
                    )}
                    onClickOutside={handleHideResult}
               >
                    <div className={cx('search')}>
                         <input
                              ref={inputRef}
                              value={searchValue}
                              placeholder="Search"
                              spellCheck={false}
                              onChange={handleChange}
                              onFocus={() => setShowResult(true)}
                         />

                         {!!searchValue && !loading && (
                              <button className={cx('clear')} onClick={handleClear}>
                                   <FontAwesomeIcon icon={faCircleXmark} />
                              </button>
                         )}

                         {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                         <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                              <SearchIcon />
                         </button>
                    </div>
               </HeadlessTippy>
          </div>
     );
}

export default Search;

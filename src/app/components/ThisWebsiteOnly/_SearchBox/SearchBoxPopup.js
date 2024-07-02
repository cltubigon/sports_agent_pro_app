import { Configure, Index, InstantSearch } from 'react-instantsearch'
import { searchClient } from '@/config/algolia/searchClient'
import CustomSearchBox from './CustomSearchBox'
import { openSans } from '@/utilities/fonts/fonts'
import CustomRecipientsInfiniteHits from './Hits/CustomRecipientsInfiniteHits'
import CustomPagesInfiniteHits from './Hits/CustomPagesInfiniteHits'

const SearchBoxPopup = ({ setpopup }) => {
  const handleKeyPress = (e) => {
    if (e.code === 'Escape') {
      setpopup(null)
    }
  }
  return (
    <div className={`${openSans.className} text-[15px] w-full`}>
      <InstantSearch
        searchClient={searchClient}
        setUiState
        indexName="prod_recipients"
      >
        <CustomSearchBox
          placeholder="Type to start searching"
          autoFocus={false}
          onKeyDown={handleKeyPress}
          setpopup={setpopup}
        />
        <div
          className={
            'border-t-[1px] border-[#F1F5F9] px-5 overflow-y-auto max-h-[60vh]'
          }
        >
          <Index indexName="prod_recipients">
            <Configure hitsPerPage={4} />
            <CustomRecipientsInfiniteHits />
          </Index>

          <Index indexName="prod_pages">
            <Configure hitsPerPage={4} />
            <CustomPagesInfiniteHits />
          </Index>
        </div>
      </InstantSearch>
    </div>
  )
}

export default SearchBoxPopup

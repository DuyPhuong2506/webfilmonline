import React from 'react';
import './styles.scss';
function HeaderSearch(props) {
    return (
        <header id="header">
         <div class="container">
            <div class="row" id="headwrap">
               <div class="col-md-3 col-sm-6 slogan">
                  <p class="site-title">
                     <a class="logo" href="./img/logo.png" title="phim hay ">Phim Hay
                     </a>
                  </p>
                  
               </div>
               <div class="col-md-5 col-sm-6 halim-search-form hidden-xs">
                  <div class="header-nav">
                     <div class="col-xs-12">
                        <form id="search-form-pc" name="halimForm" role="search" action="" method="GET">
                           <div class="form-group">
                              <div class="input-group col-xs-12">
                                 <input id="search" type="text" name="s" class="form-control" placeholder="Tìm kiếm..." autocomplete="off" required/>
                                 <i class="animate-spin hl-spin4 hidden"></i>
                              </div>
                           </div>
                        </form>
                        <ul class="ui-autocomplete ajax-results hidden"></ul>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 hidden-xs d-flex align-items-center justify-content-end">
                  <div id="get-bookmark" class="box-shadow"><i class="hl-bookmark"></i><span> Bookmarks</span><span class="count">0</span></div>
                  <div id="bookmark-list" class="hidden bookmark-list-on-pc">
                     <ul></ul>
                  </div>
               </div>
            </div>
         </div>
      </header>
    );
}

export default HeaderSearch;